import { NextRequest, NextResponse } from "next/server";


const GET = async function(req: NextRequest) {
    return NextResponse.json({
        message: "Greetings! Welcome to our store"
    })
}