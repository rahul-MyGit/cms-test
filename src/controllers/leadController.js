const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const searchLeads = async (req,res) => {
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
        const updatedLead = await prisma.lead.update({
            where: {
                id: parseInt(leadId)
            },
            data: {
                status
            }
        });

        res.json({
            message: "Lead Status Updated successfully",
            lead: updatedLead
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
                content
            }
        });

        res.status(201).json({
            message: "Remark added successfully",
            remark
        });
    } catch (error) {
        res.status(500).json({
            error: "Error adding remarks"
        });
    }
}


module.exports = {
    searchLeads,
    updateLead,
    addRemark
}