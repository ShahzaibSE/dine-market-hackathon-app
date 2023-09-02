"use client";

import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "./../../src/components/ui/input";

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
    <div className="flex flex-1 justify-center items-center">
      <form className="flex flex-col justify-center items-center gap-4" onSubmit={onSubmit}>
        <div className="flex justify-center items-center">
          <Input className="max-w-fit xl:w-80" placeholder="Full Name" name="fullname" aria-label="fullname"/>
        </div>
        <div className="flex justify-start items-center">
          <CardElement className="max-w-fit xl:w-80" />
        </div>
        <div className="flex justify-center items-center">
          <Button>
            <span>Submit</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
