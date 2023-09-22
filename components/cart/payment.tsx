"use client";

import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Stripe from "stripe";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "./../../src/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PopUpToast } from "@/lib/toast";
import { useAppSelector } from "@/store/store";
import {
  clearCart,
  totalPriceSelector,
} from "@/store/features/cartSlice";
import { redirect } from "next/dist/server/api-utils";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/router";
import {
  toast,
  ToastContainer,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const appearance = { /* appearance */ };
// const options = { /* options */ };
// const elements = stripe.elements({ clientSecret: process.env.STRIPE_SECRET_KEY, appearance });
// const paymentElement = elements.create('payment', options);
// paymentElement.mount('#payment-element');

export default function PaymentForm() {
  const toaster = () =>
    toast("Payment Successful");
  const dispatch = useAppDispatch();
  const totalPayment = useAppSelector(
    totalPriceSelector
  );
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const cardElement =
      elements?.getElement("card");
    try {
      if (!stripe || !cardElement) return null;
      const { data } = await axios.post(
        "/api/checkout",
        {
          data: { amount: totalPayment },
        }
      );
      const clientSecret = data;
      // console.log("Client Secret:", clientSecret);

      await stripe?.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: cardElement },
        }
      );

      dispatch(clearCart([]));
      setName(" ");
      setAddress(" ");
      setEmail(" ");
      cardElement?.clear();
      console.log("Payment successful!");
      toast.success("Payment Successfull ✅", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.log(error);
    } finally {
      // setName(" ");
      // setAddress(" ");
      // setEmail(" ");
      // cardElement?.clear();
      // dispatch(clearCart([]));
      //
      // PopUpToast("Payment successful!", "success");
    }
  };

  return (
    <div className="flex justify-center items-center w-full my-28">
      <Card>
        <form
          className="flex flex-col justify-center items-center gap-4 max-w-screen-xl"
          onSubmit={onSubmit}
        >
          <CardHeader>
            <CardTitle>
              Your Payment Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center items-center w-full gap-4 xl:max-w-screen-xl">
              <div className="flex justify-center items-center">
                <Input
                  className="w-60 xl:w-80"
                  placeholder="Full Name"
                  name="fullname"
                  aria-label="fullname"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />
              </div>
              <div className="flex justify-center items-center">
                <Input
                  className="w-60 xl:w-80"
                  placeholder="Email"
                  name="email"
                  aria-label="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
              <div className="flex justify-center items-center">
                <Input
                  className="w-60 xl:w-80"
                  placeholder="Address"
                  name="address"
                  aria-label="address"
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                />
              </div>
              {/* <div className="flex justify-center items-center">
                <PaymentElement  className="w-60 xl:w-80" />
              </div> */}
              <div className="flex justify-center items-center">
                <CardElement
                  id="card-element"
                  className="w-60 xl:w-80"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-center items-center">
              <Button className="w-full">
                <span>Submit</span>
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
