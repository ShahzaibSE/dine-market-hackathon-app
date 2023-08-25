import { Product } from "@/type";
import {
  NextRequest,
  NextResponse,
} from "next/server";
import {
  dbClient,
  cartTable,
} from "@/lib/drizzle";

import { InferModel } from "drizzle-orm";

import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
//
import {
  CartAPIModel,
  CartAPIType,
  CartAPIInsertType,
} from "@/type";

export const GET = async function () {
  try {
    const cartItems = await dbClient
      .select()
      .from(cartTable);

    //
    return NextResponse.json({
      status: true,
      resCode: 200,
      message: "Your Products in Cart",
      data: cartItems,
      isError: false,
    });
  } catch (err) {
    // console.log(err);
    return NextResponse.json({
      status: false,
      resCode: 500,
      message: "Something Went Wrong",
      isError: true,
      err,
    });
  }
};

export async function POST(
  request: NextRequest,
  response: NextResponse
) {
  try {
    const req = await request.json();
    // console.log("Cart - Post Request");
    // console.log(req);
    const userid = uuid();
    let newItem: CartAPIInsertType = {
      userid,
      ...req,
    };
    // Adding item to cart table.
    const insertedNewItem = await dbClient
      .insert(cartTable)
      .values(newItem)
      .returning();
    // req.defineProperty("userid",userid);
    return NextResponse.json({
      status: true,
      resCode: 200,
      message: "Your Products in Cart",
      data: insertedNewItem,
      isError: false,
    });
  } catch (err) {
    return NextResponse.json({
      status: false,
      resCode: 500,
      message: "Internal Error",
      isError: true,
      err,
    });
  }
}
