import {
  NextRequest,
  NextResponse,
} from "next/server";

import { client } from "../../../../sanity/lib/client";
import { Product } from "@/type";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query: string =
      searchParams.get("gender") == null
        ? `*[_type == 'product' && gender == 'male' || gender == 'female' || gender == 'kid'] `
        : `*[_type == 'product' && gender == '${searchParams.get(
            "gender"
          )}']`;
    const products = await client.fetch(query, {
      next: { revalidate: 60 },
    });
    // const products = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-06-01/data/query/production?query=${query}`);

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
