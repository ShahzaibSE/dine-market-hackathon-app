import { Product } from "@/type";
import { NextRequest, NextResponse } from "next/server";
import { dbClient } from "@/lib/drizzle";

export async function POST(request: NextRequest, response: NextResponse) {
    try{

    }catch(err){
        return NextResponse.json({
            status: false,
            resCode: 500,
            message: "Internal Error",
            isError: true
        })
    }
}