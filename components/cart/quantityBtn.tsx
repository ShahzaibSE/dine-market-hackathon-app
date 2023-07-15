import React from "react";
import { Product } from "@/type";

interface Props {
  increaseQty: () => void;
  decreaseQty: () => void;
  quantity: number;
}
import {
    Plus,
    Minus,
    Recycle,
    ShoppingCart,
    DeleteIcon,
  } from "lucide-react";

export default function QuantityBtn(
  props: Props
) {
  return (
    <div className="flex justify-start items-center gap-4">
      <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-400">
        <span
          onClick={props.decreaseQty}
        >
          <Minus />
        </span>
      </div>
      <div>
        <p>{props.quantity}</p>
      </div>
      <div className="flex justify-center items-center w-10 h-10 rounded-full border-black border-2">
        <span
          onClick={props.increaseQty}
        >
          <Plus />
        </span>
      </div>
    </div>
  );
}
