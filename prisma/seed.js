const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

async function main(){

    //creating instructor:
    const instructor1 = await prisma.instructor.create({
        data: {
            name: "Teacher 1",
            email: "teacher1@example.com",
            bio: "5 years of experiance with WEB3"
        }
    });

    const instructor2 = await prisma.instructor.create({
        data: {
            name: "Teacher 2",
            email: "teacher2@example.com",
            bio: "10 years of experiance with MERN and NEXT"
        }
    });

    const instructor3 = await prisma.instructor.create({
        data: {
            name: "Teacher 3",
            email: "teacher3@example.com",
            bio: "20 years of experiance as Project Director"
        }
    });

    // creating courses:
    const course1 = await prisma.course.create({
        data: {
            instructorId: instructor1.id,
            name: "0 - 100 in Web3",
            description: "CTO is personally going to teach this so be ready to grind",
            maxSeats: 50,
            leftSeats: 50,
            startDate: new Date('2024-12-15'),
            endDate: new Date('2024-7-2'),
            price: 49.99
        }
    });

    const course2 = await prisma.course.create({
        data: {
            instructorId: instructor2.id,
            name: "Full stack web dev in MERN",
            description: "zero to hero in MERN",
            maxSeats: 20,
            leftSeats: 20,
            startDate: new Date('2024-12-15'),
            endDate: new Date('2024-7-2'),
            price: 59.99
        }
    });

    const course3 = await prisma.course.create({
        data: {
            instructorId: instructor2.id,
            name: "Full stack web dev in NEXT",
            description: "hero to god in NEXT",
            maxSeats: 15,
            leftSeats: 14,
            startDate: new Date('2024-12-15'),
            endDate: new Date('2024-7-2'),
            price: 99.99
        }
    });

    //creating users:
    const lead1 = await prisma.lead.create({
        data: {
            name: "lead 1",
            email: "lead1@example.com",
            phone: "3213213211",
            linkedinProfile: "https://linkedin.com/in/lead1-mylink",
            status: "PENDING",
            courseId: course1.id
        }
    });

    const lead2 = await prisma.lead.create({
        data: {
            name: "lead 2",
            email: "lead2@example.com",
            phone: "3213213211",
            linkedinProfile: "https://linkedin.com/in/lead2-mylink",
            status: "PENDING",
            courseId: course2.id
        }
    });

    const lead3 = await prisma.lead.create({
        data: {
            name: "lead 3",
            email: "lead3@example.com",
            phone: "3213213211",
            linkedinProfile: "https://linkedin.com/in/lead3-mylink",
            status: "ACCEPT",
            courseId: course3.id
        }
    });

    //createing remarks:
    await prisma.comment.create({
        data: {
            leadId: lead1.id,
            instructorId: instructor2.id,
            content: "He has a very good nature and he's great with MERN stack"
        }
    });

    await prisma.comment.create({
        data: {
            leadId: lead2.id,
            instructorId: instructor2.id,
            content: "He has a great sense of humore and he's great in NEXT stack"
        }
    });


    console.log("Seed data inserted successfully");
}

main().catch((e)=>{
    console.error(e);
    process.exit(1);
}).finally( async ()=>{
    await prisma.$disconnect();
});