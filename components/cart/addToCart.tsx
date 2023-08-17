"use client";
import React from "react";
import { Product, CartItem, CartAPIModel } from "@/type";
import { capitaliseString } from "@/utils";
import {
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  productQtyInCartSelector,
  addToCart,
  increaseQuantity,
} from "@/store/features/cartSlice";
import {
  useAppSelector,
  useAppDispatch,
} from "@/store/store";
import { useAddToCartMutationMutation } from "@/store/services/cartAPI";

interface Props {
  product: Product;
}

export default function AddToCart(props: Props) {
  const dispatch = useAppDispatch();
  const [add_to_cart, response] = useAddToCartMutationMutation();
  const quantity = useAppSelector((state) =>
    productQtyInCartSelector(
      state,
      props.product?._id == undefined
        ? " "
        : props.product._id
    )
  );
  //
  const addItemsToCart = function(cart_item: Product) {
    try{
      // const cartItemReqObj = {
      //   _id : cart_item._id,
      //   name: cart_item.name as string,
      //   category: cart_item.category as string,
      //   gender: cart_item.gender as string,
      //   price: cart_item.price,
      //   imageUrl: cart_item.imageUrl,
      // }
      // const cartItemReqObj:CartAPIModel = {
      //   productid : cart_item._id,
      //   name: cart_item.name as string,
      //   category: cart_item.category as string,
      //   price: Number(cart_item.price),
      //   imageUrl: cart_item.imageUrl,
      //   // quantity: 
      // }
      console.log("Item that is being added to db");
      
      // add_to_cart(cartItemReqObj).then(res => {
      //   console.log("Adding item to database");
      //   console.log(res);
      // }).catch((err)=>{console.log(err)});
      dispatch(increaseQuantity(cart_item));
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <Button
      onClick={() => {
        addItemsToCart(props.product)
      }}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />{" "}
      <span className="font-bold">
        Add to Cart
      </span>
    </Button>
  );
}
