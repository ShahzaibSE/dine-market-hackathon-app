import {
  NextRequest,
  NextResponse,
} from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY as string,
  { typescript: true, apiVersion: "2023-08-16" }
);

// export async function POST(request: NextRequest) {
//   try {
//     const { data } = await request.json();
//     console.log("Payment Data - API");
//     // console.log(data);
//     const { amount } = data;
//     console.log(amount);
//     const paymentIntent =
//       await stripe.paymentIntents.create({
//         amount: Number(amount) * 100,
//         currency: "USD",
//       });
//     return new NextResponse(
//       paymentIntent.client_secret,
//       {
//         status: 200,
//       }
//     ).json();
//   } catch (err) {
//     return NextResponse.json({
//       status: false,
//       resCode: 500,
//       message:
//         "Internal Error occured while checking out",
//       isError: true,
//       err,
//     });
//   }
// }

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  const { amount } = data;
  console.log("Checkout Amount - API");
  console.log(data);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
    });

    return new NextResponse(paymentIntent.client_secret, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}
