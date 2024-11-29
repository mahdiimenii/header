import { ServiceCardService } from "@/services/service-card/service-card.service";
import { NextResponse } from "next/server";

const serviceCardService = new ServiceCardService();


export async function GET() {
    return NextResponse.json(
        {
            "response": "success",
            "data": await serviceCardService.getServiceCards()
        }
    )
}
