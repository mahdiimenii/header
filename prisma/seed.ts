const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    const serviceCards = [
        {
        title: "پشتیبانی سریع",
        description: "هفت روز هفته، در تمام ایام کنار شماییم تا چالش‌هایتان را با هم رفع کنیم.",
        image: "https://tesmino.com/_nuxt/chart.cc14b970.svg"

        },
        {
            title: "",
            description: "",
            image: ""
        },

    ];

    console.log("Seeding movie cards...");
    for (const service of serviceCards) {    
        await prisma.serviceCard.create({
            data: service,
        });
    }
    console.log("Seeding completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
