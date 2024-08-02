const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const allLeads = async (req,res) => {
    try {
        const {name , email } = req.body;
        const leads = await prisma.lead.findMany({
            where: {
                AND: [
                    name  ? {name: {contains: name, mode: 'insensitive'} } : {},
                    email ? {email: {contains: email, mode: 'insensitive'} } : {},
                ],
            },
        });

        res.json(leads)
    } catch (error) {
        res.json(500).json({
            error: "Error searching leads"
        });
    }
}

const updateLead = async (req,res) => {
    try {
        const { leadId} = req.params;
        const { status } = req.body;

        const result = await prisma.$transaction(async (prisma) => {
            const lead = await prisma.lead.findUnique({
                where: {
                    id: parseInt(leadId)
                },
                include: {
                    course: true
                }
            });

            if(!lead) {
                throw new Error("User not found")
            }

            if(status === 'ACCEPT' && lead.status !== 'ACCEPT'){
                if( lead.course.leftSeats <= 0){
                    throw new Error("Cant enter user as leftSeats is 0");
                }

                await prisma.course.update({
                    where: {
                        id: parseInt(lead.courseId)
                    },
                    data: {
                        leftSeats: {
                            decrement: 1
                        }
                    }
                });
            }

            const updatedLead = await prisma.lead.update({
                where: {
                    id: parseInt(leadId)
                },
                data: {
                    status
                }
            });

            return updatedLead;

        });


        res.json({
            message: "Lead Status Updated successfully",
            lead: result
        });
    } catch (error) {
        res.status(500).json({
            error: "Error updating status for lead"
        });
    }
}

const addRemark = async (req, res) => {
    try {
        const {leadId} = req.params;
        const {instructorId, content} = req.body;
        const remark = await prisma.comment.create({
            data: {
                leadId: parseInt(leadId),
                instructorId : parseInt(instructorId),
                content
            }
        });

        console.log(remark);

        res.status(201).json({
            message: "Remark added successfully",
            remark
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error adding remarks"
        });
    }
}


module.exports = {
    allLeads,
    updateLead,
    addRemark
}