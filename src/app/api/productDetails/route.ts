import {
  NextRequest,
  NextResponse,
} from "next/server";

import { client } from "../../../../sanity/lib/client";

export async function GET(request: NextRequest, response: NextResponse) {
    try {
        const { searchParams } = new URL(request.url);
        const products = await client.fetch(`*[_type == 'product' && _id == '${searchParams.get("q")}'] `);
        return NextResponse.json({
            status: true,
            data: products
        });
      } catch (err) {
         return NextResponse.json({
          status: false,
          message: "No Product Found"
         })
      }
}