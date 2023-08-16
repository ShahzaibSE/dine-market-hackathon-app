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

// export const POST = async function (
//   request: NextRequest
// ) {
//   try {
//     const req = await request.json();
//     const userid = uuid();
//     const setCookies = cookies();
//     //
//     if (!cookies().has("user_id")) {
//       setCookies.set("user_id", userid);
//       console.log("User ID");
//       console.log(userid);
//     }
//     console.log(userid);
//     const cartItem: any = {
//       userid,
//       totalprice: Number(req.totalprice),
//       cartcount: Number(req.cartcount),
//       // cartDetails: req.cartDetails
//     };
//     console.log("Adding Cart Item in DB - API");
//     // console.log(cartItem);
//     // const data = await dbClient
//     //   .insert(cartTable)
//     //   .values(cartItem)
//     //   .returning();
//     //
//     return NextResponse.json({
//       status: true,
//       resCode: 200,
//       message: "Product added to cart",
//       cartItem,
//       isError: false,
//     });
//   } catch (err) {
//     return NextResponse.json({
//       status: false,
//       resCode: 500,
//       message: "Internal Error",
//       isError: true,
//       err,
//     });
//   }
// };

export async function POST(
  request: NextRequest,
  response: NextResponse
) {
  try {
    const req = await request.json();
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