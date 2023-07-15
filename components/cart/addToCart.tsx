"use client";
import React from "react";
import { Product } from "@/type";
import { capitaliseString } from "@/utils";
import {
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { productQtyInCartSelector, addToCart, increaseQuantity } from "@/store/features/cartSlice";
import {
  useAppSelector,
  useAppDispatch,
} from "@/store/store";

interface Props {
  product: Product;
}

export default function AddToCart(props: Props) {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) =>
    productQtyInCartSelector(
      state,
      props.product._id
    )
  );
  return (
    <Button onClick={()=>dispatch(increaseQuantity(props.product))}>
      <ShoppingCart className="mr-2 h-4 w-4" />{" "}
      <span className="font-bold">
        Add to Cart
      </span>
    </Button>
  );
}
