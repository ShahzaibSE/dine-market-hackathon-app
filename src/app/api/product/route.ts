import {
  NextRequest,
  NextResponse,
} from "next/server";

import { client } from "../../../../sanity/lib/client";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query: string =
      searchParams.get("gender") == null
        ? `*[_type == 'product' && gender == 'male' || gender == 'female' || gender == 'kid'] `
        : `*[_type == 'product' && gender == '${searchParams.get(
            "gender"
          )}']`;
    console.log("Query");
    console.log(query)
    const products = await client.fetch(query);

    //
    return NextResponse.json({
      status: true,
      data: products.length > 0 ? products : [],
    });
  } catch (err) {
    return NextResponse.json({
      status: false,
      message: "No Products",
    });
  }
}
