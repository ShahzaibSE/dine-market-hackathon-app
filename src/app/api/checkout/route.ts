import {
  NextRequest,
  NextResponse,
} from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY as string,
  { typescript: true, apiVersion: "2023-08-16" }
);

export async function POST(request: NextRequest) {
  try {
    const { data } = await request.json();
    const { amount } = data;
    const paymentIntent =
      stripe.paymentIntents.create({
        amount: Number(amount) * 100,
        currency: "USD",
      });
    const clientSecret = (await paymentIntent)
      .client_secret;
    return new NextResponse(clientSecret, {
      status: 200,
    }).json();
  } catch (err) {
    return NextResponse.json({
      status: false,
      resCode: 500,
      message:
        "Internal Error occured while checking out",
      isError: true,
      err,
    });
  }
}
