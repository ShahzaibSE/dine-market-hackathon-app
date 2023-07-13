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
        add_to_cart: (state: any, payload: PayloadAction<Product>) => {
        }
    }
});