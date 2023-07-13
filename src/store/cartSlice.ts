import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/type";

export interface CartState {
  cart_items: Product[];
}

export const initialState: CartState = {
  cart_items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: any,
      action: PayloadAction<Product>
    ) => {
      const itemInCart: Product | any =
        state.cart_items.filter(
          (item: Product) =>
            item._id === action.payload._id
        );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart_items.push(itemInCart);
      }
    },
    removeItem: (
      state: any,
      action: PayloadAction<Product>
    ) => {
      const itemAfterDelete =
        state.cart_items.filter(
          (item: Product) =>
            item._id !== action.payload._id
        );
      state.cart_items = itemAfterDelete;
    },
    increateQuantity: (
      state: any,
      action: PayloadAction<Product>
    ) => {
      const item = state.cart_items.find(
        (item: Product) =>
          item._id == action.payload._id
      );
      item.quantity++;
    },
    decreaseQuantity: (
      state: any,
      action: PayloadAction<Product>
    ) => {
      const item = state.cart_items.find(
        (item: Product) =>
          item._id == action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  increateQuantity,
  decreaseQuantity,
} = cartSlice.actions;
