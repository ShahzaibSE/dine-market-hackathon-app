"use client";

import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "./../../src/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

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
          data: { amount: 89 },
        }
      );
      const clientSecret = data;

      await stripe?.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: cardElement },
        }
      );
    } catch (error) {
      console.log(error);
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
            <CardTitle>Your Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center items-center w-full gap-4 xl:max-w-screen-xl">
              <div className="flex justify-center items-center">
                <Input
                  className="w-60 xl:w-80"
                  placeholder="Full Name"
                  name="fullname"
                  aria-label="fullname"
                />
              </div>
              <div className="flex justify-center items-center">
                <Input
                  className="w-60 xl:w-80"
                  placeholder="Email"
                  name="email"
                  aria-label="email"
                />
              </div>
              <div className="flex justify-center items-center">
                <Input
                  className="w-60 xl:w-80"
                  placeholder="Address"
                  name="address"
                  aria-label="address"
                />
              </div>
              <div className="flex justify-center items-center">
                <CardElement  className="w-60 xl:w-80" />
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
    </div>
  );
}
