"use client";
import React from "react";
import { Product, CartItem } from "@/type";
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

  // create table cart(
  //   id serial primary key,
  //   product_id varchar(255) not null,
  //   name varchar(255) not null,
  //   description varchar(255),
  //   category varchar(255),
  //   gender varchar(255) not null,
  //   price integer not null,
  //   imageUrl json not null,
  //   previews json[],
  //   quantity integer not null,
  //   user_id varchar(255) not null
  //  )
  const addItemsToCart = function(cart_item: Product) {
    try{
      const cartItemReqObj = {
        _id : cart_item._id,
        name: cart_item.name as string,
        category: cart_item.category as string,
        gender: cart_item.gender as string,
        price: cart_item.price,
        imageUrl: cart_item.imageUrl,
        previews: cart_item.previews
      }
      console.log("Item that is being added to db");
      
      add_to_cart(cartItemReqObj).then(res => {
        console.log("Adding item to database");
        console.log(res);
      }).catch((err)=>{console.log(err)});
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
