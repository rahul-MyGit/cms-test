const { PrismaClient, Prisma}  = require("@prisma/client");
const prisma = new PrismaClient();

const createCourse = async (req, res) => {
    try {
        const {instructorId, name, description, maxSeats, startDate, endDate, price} = req.body;
        const course = await prisma.course.create({
            data: {
                instructorId: parseInt(instructorId),
                name,
                description,
                maxSeats : parseInt(maxSeats),
                leftSeats: parseInt(maxSeats),
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                price: new Prisma.Decimal(parseFloat(price)),
            }
        });
        res.status(201).json({
            message: "Course created successfully",
            course
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error while creating the course"
        });
    }
}

const updateCourse = async (req,res) => {
    try {
        const { courseId } = req.params;
        const {name, maxSeats, startDate, endDate, price, status} = req.body;

        const course = await prisma.course.findUnique({
            where: {
                id: parseInt(courseId)
            }
        })

        if (!course) {
            return res.status(404).json({
                message: "COurse not found"
            })
        }
        if(course.maxSeats > parseInt(maxSeats)) {
            return res.status(400).json({
                message: "Cannot decrease max seats"
            });
        }

        const updatedSeats = (parseInt(maxSeats) - course.maxSeats); 

        const updatedCourse = await prisma.course.update({
            where: {
                id: parseInt(courseId)
            },
            data: {
                name,
                maxSeats : parseInt(maxSeats),
                leftSeats: {
                    increment: updatedSeats
                },
                startDate: new Date(startDate),
                endDate : new Date(endDate),
                price : new Prisma.Decimal(parseFloat(price)),
                status
            }
        });
        res.json({
            message: "Course updated successfully",
            course: updatedCourse
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error updating course"
        });
    }
}

const registerUser = async ( req, res) => {
    try {
        const { courseId} = req.params;
        const {name, email, phone, linkedinProfile} = req.body;
        const lead = await prisma.lead.create({
            data: {
                courseId: parseInt(courseId),
                name,
                email,
                phone,
                linkedinProfile,
            },
        });
        res.status(201).json({
            message: "Application submitted successfully",
            lead
        });
    } catch (error) {
        res.status(500).json({
            error: "Error submitting the application"
        });
    }
}

module.exports = {
    createCourse,
    updateCourse,
    registerUser,
}