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

module.exports = {
    searchLeads
}