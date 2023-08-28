"use client"
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '../../../components/cart/checkout';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

export default function CheckOutPage() {
  return (
    <Elements stripe={stripePromise}>
        <CheckOutForm />
    </Elements>
  )
}
