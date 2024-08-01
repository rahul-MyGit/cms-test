const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addComment = async (req,res) => {
    const content = "This student is good in backend";
    const comment = await prisma.comment.create({
        data: {
            content
        }
    });

    res.status(200).json({
        message: "Comment added successfully",
        comment
    });
}

module.exports = {
    addComment
}