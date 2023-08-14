import { Product } from "@/type";
import {
  NextRequest,
  NextResponse,
} from "next/server";
import {
  dbClient,
  cartTable,
} from "@/lib/drizzle";

import {v4 as uuid} from "uuid";
import { cookies } from "next/headers";
//
import { CartAPIRequest } from "@/type";

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
    });
  }
};

export const POST = async function (
  request: NextRequest,
  response: NextResponse
) {
  try {
    const req = await request.json();
    const uid = uuid();
    const setCookies = cookies();
    //
    if(!cookies().has("user_id")){
      setCookies.set("user_id", uid);
    }
    //
    // const cartItem = {
    //   product_id: req.product_id,
    //   quantity: Number(req.quantity) as number,
    //   user_id: setCookies.get("user_id")?.value as string,
    //   name: req.name,
    //   imageUrl: req.imageUrl,
    //   gender: req.gender,
    //   price: req.price
    // }
    const cartItem:CartAPIRequest = {
      user_id: req.user_id,
      totalPrice: Number(req.totalPrice),
      cartCount: Number(req.cartCount),
      cartDetails: req.cartDetails
    };
    console.log("Adding Cart Item in DB - API");
    console.log(cartItem);
    const data = await dbClient
      .insert(cartTable)
      .values(req);
    //
    return NextResponse.json({
      status: true,
      resCode: 200,
      message: "Product added to cart",
      data,
      isError: false,
    });
  } catch (err) {
    return NextResponse.json({
      status: false,
      resCode: 500,
      message: "Internal Error",
      isError: true,
    });
  }
};
