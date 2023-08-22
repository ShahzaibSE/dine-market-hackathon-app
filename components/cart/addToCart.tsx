"use client";
import React from "react";
import {
  Product,
  CartItem,
  CartAPIModel,
} from "@/type";
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
  totalPriceSelector,
  totalCartItemsSelector,
} from "@/store/features/cartSlice";
import {
  useAppSelector,
  useAppDispatch,
} from "@/store/store";
import { useAddToCartMutationMutation } from "@/store/services/cartAPI";

interface Props {
  cart_item: CartItem;
}

export default function AddToCart(props: Props) {
  const dispatch = useAppDispatch();
  const [add_to_cart, response] =
    useAddToCartMutationMutation();
  const cartItems = useAppSelector((state)=>state.cart.cartItems);
  const totalPrice = useAppSelector(
    totalPriceSelector
  );
  const totalItems = useAppSelector(
    totalCartItemsSelector
  );
  const quantity = useAppSelector((state) =>
    productQtyInCartSelector(
      state,
      props.cart_item.product?._id == undefined
        ? " "
        : props.cart_item.product._id
    )
  );
  //
  const addItemsToCart = function (
    cart_item: CartItem
  ) {
    try {
      const cartItem: CartAPIModel = {
        productid: props.cart_item?.product?._id as string,
        name: props.cart_item?.product?.name as string,
        category: props.cart_item?.product?.category as string,
        price: Number(props.cart_item?.product?.price) as number,
        imageurl: props.cart_item?.product?.imageUrl,
        quantity: props.cart_item?.quantity,
        totalprice: 0,
        cartcount: 0
      }
      console.log(
        "Item that is being added to db"
      );
      console.log(cartItem);
      add_to_cart(cartItem).then(res => {
        console.log("Adding item to database");
        console.log(res);
      }).catch((err)=>{console.log(err)});
      dispatch(increaseQuantity(cart_item));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Button
      onClick={() => {
        addItemsToCart(props.cart_item);
      }}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />{" "}
      <span className="font-bold">
        Add to Cart
      </span>
    </Button>
  );
}
