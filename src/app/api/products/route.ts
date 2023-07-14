import {
    NextRequest,
    NextResponse,
  } from "next/server";
  
  import { client } from "../../../../sanity/lib/client";
  
  export async function GET(request: NextRequest) {
    try {
      const { searchParams } = new URL(request.url);
      const query: string = `*[_type == 'product' && gender == 'male' || gender == 'female' || gender == 'kid'] `
        
      console.log("Query");
      console.log(query)
      const products = await client.fetch(query);
  
      //
      return NextResponse.json({
        status: true,
        data: products,
      });
    } catch (err) {
      return NextResponse.json({
        status: false,
        message: "No Products",
      });
    }
  }
  