const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    const serviceCards = [
        {
        title: "پشتیبانی سریع",
        description: "هفت روز هفته، در تمام ایام کنار شماییم تا چالش‌هایتان را با هم رفع کنیم.",
        image: "https://tesmino.com/_nuxt/operator.f5234987.svg"

        },
        {
            title: "سیستم گزارش‌دهی دقیق",
            description: "تیم تسمینو در تمامی مراحل ثبت سفارش همراه‌تان بوده و گزارش دقیقی از وضعیت کمپین‌ها به شما ارائه می‌دهد.",
            image: "https://tesmino.com/_nuxt/chart.cc14b970.svg"
        },
        {
            title: "هزینه مناسب",
            description: "با توجه به هزینه بالای مارکتینگ و خدمات سئو، سعی کردیم تا با مناسب‌ترین قیمت‌ها شما را همراهی کنیم.",
            image: "https://tesmino.com/_nuxt/wallet.10739844.svg"
        },
        {
            title: "مشاوره انتخاب رسانه و تولید محتوا",
            description: "برای انتخاب رسانه یا پروسه تولید محتوا سوال دارید؟ کارشناسان متخصص ما به صورت رایگان شما را در انتخاب بهترین‌ها همراهی می‌کنند.",
            image: "https://tesmino.com/_nuxt/chat.11abb4d9.svg"
        },
        {
            title: "بررسی سفارشات",
            description: "تسمینو، سلامت تمامی سفارشات رپورتاژآگهی، تولید محتوا و ثبت بک‌لینک را تضمین کرده و در صورت بروز هرگونه مشکلی، کنار شما خواهد بود.",
            image: "https://tesmino.com/_nuxt/incognito.a7f2b289.svg"
        },
        {
            title: "صرفه‌جویی در زمان",
            description: "سرعت بالا یکی از فاکتورهای مهم تسمینو در جهت جلب رضایت کاربرانش به‌حساب می‌آید. طی کوتاه‌ترین زمان ممکن چالش‌هایتان را برطرف خواهیم کرد.",
            image: "https://tesmino.com/_nuxt/clock.c5deb872.svg"
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
