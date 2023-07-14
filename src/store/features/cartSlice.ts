import {
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product, CartItem } from "@/type";
import { RootState } from "../store";

export interface CartState {
  cartItems: CartItem[];
}

export const initialState: CartState = {
  cartItems: [],
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
        state.cartItems.filter(
          (item: Product) =>
            item._id === action.payload._id
        );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push(itemInCart);
      }
    },
    removeItem: (
      state: any,
      action: PayloadAction<Product>
    ) => {
      const itemAfterDelete =
        state.cartItems.filter(
          (item: Product) =>
            item._id !== action.payload._id
        );
      state.cartItems = itemAfterDelete;
    },
    increateQuantity: (
      state: any,
      action: PayloadAction<Product>
    ) => {
      const item = state.cartItems.find(
        (item: Product) =>
          item._id == action.payload._id
      );
      item.quantity++;
    },
    decreaseQuantity: (
      state: any,
      action: PayloadAction<Product>
    ) => {
      const item = state.cartItems.find(
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

const cartItems = (state: RootState) =>
  state.cart.cartItems;
// Creating Selectors.
export const totalCartItemsSelector =
  createSelector([cartItems], (cartItems) => {
    cartItems.reduce(
      (total: number, curr: CartItem) =>
        (total += curr.quantity),0);
  });


export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  increateQuantity,
  decreaseQuantity,
} = cartSlice.actions;
