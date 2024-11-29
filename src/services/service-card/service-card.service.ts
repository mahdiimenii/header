import prisma from "lib/prisma";

// This function service return's all movie's object from database

export class ServiceCardService {
    constructor(){}

    public async getServiceCards() {
        return await prisma.serviceCard.findMany();
    }
}
