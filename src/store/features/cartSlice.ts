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
    // addToCart: (
    //   state: any,
    //   action: PayloadAction<Product>
    // ) => {
    //   const itemInCart: Product | any =
    //     state.cartItems.filter(
    //       (item: Product) =>
    //         item._id === action.payload._id
    //     );
    //   if (itemInCart) {
    //     itemInCart.quantity++;
    //   } else {
    //     state.cartItems.push(itemInCart);
    //   }
    // },
    addToCart: (
      state: any,
      action: PayloadAction<Product>
    ) => {
      const cartItem = state.cartItems.find(
        (el:CartItem) =>
          el.product._id === action.payload._id
      );
      if (cartItem) cartItem.qty++;
      else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
    },
    removeItem: (
      state: any,
      action: PayloadAction<Product>
    ) => {
      const itemAfterDelete =
        state.cartItems.filter(
          (item: CartItem) =>
            item.product._id !== action.payload._id
        );
      state.cartItems = itemAfterDelete;
    },
    // increaseQuantity: (
    //   state: any,
    //   action: PayloadAction<Product>
    // ) => {
    //   const item = state.cartItems.find(
    //     (item: CartItem) =>
    //       item.product._id == action.payload._id
    //   );
    //   item.quantity++;
    // },
    // decreaseQuantity: (
    //   state: any,
    //   action: PayloadAction<Product>
    // ) => {
    //   const item = state.cartItems.find(
    //     (item: CartItem) =>
    //       item.product._id == action.payload._id
    //   );
    //   if (item.quantity === 1) {
    //     item.quantity = 1;
    //   } else {
    //     item.quantity--;
    //   }
    // },
    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cartItems.find(
        (el) => el.product._id === action.payload._id
      );
      if (cartItem) cartItem.quantity++;
      else {
        state.cartItems.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },

    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cartItems.find(
        (el) => el.product._id === action.payload._id
      );
      if (cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product._id !== action.payload._id
          );
        }
      }
    },
  },
});

const cartItems = (state: RootState) =>
  state.cart.cartItems;

// Creating Selectors.
export const totalCartItemsSelector =
  createSelector([cartItems], (cartItems) =>
    cartItems.reduce(
      (total: number, current: CartItem) =>
        (total += current.quantity),
      0
    )
  );

export const totalPriceSelector = createSelector(
  [cartItems],
  (cartItems) =>
    cartItems.reduce(
      (total: number, current: CartItem) =>
        (total +=
          current.quantity *
          Number(current.product.price)),
      0
    )
);

export const productQtyInCartSelector =
  createSelector(
    [
      cartItems,
      (cartItems, productId: string) => productId,
    ],
    (cartItems, productId) =>
      cartItems.find(
        (el) => el.product._id === productId
      )?.quantity
  );

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
