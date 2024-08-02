const { PrismaClient}  = require("@prisma/client");
const prisma = new PrismaClient();

const createCourse = async (req, res) => {
    try {
        const {instructorId, name, description, maxSeats, startDate, endDate, price} = req.body;
        const course = await prisma.course.create({
            data: {
                instructorId,
                name,
                description,
                maxSeats,
                startDate,
                endDate,
                price,
            }
        });
        res.status(200).json({
            message: "Course created successfully",
            course
        });
    } catch (error) {
        res.status(500).json({
            error: "Error while creating the course"
        });
    }
}

const updateCourse = async (req,res) => {
    try {
        const { courseId } = req.params;
        const {name, maxSeats, startDate, endDate, price, status} = req.body;
        const updatedCourse = await prisma.course.update({
            where: {
                id: parseInt(courseId)
            },
            data: {
                name,
                maxSeats,
                startDate,
                endDate,
                price,
                status
            }
        });
        res.json({
            message: "Course updated successfully",
            course: updatedCourse
        });
    } catch (error) {
        res.status(500).json({
            error: "Error updating course"
        });
    }
}

module.exports = {
    createCourse,
    updateCourse
}