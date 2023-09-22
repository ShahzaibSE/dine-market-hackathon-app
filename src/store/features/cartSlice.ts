import {
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  Product,
  CartItem,
  CartAPIModel,
} from "@/type";
import { RootState } from "../store";
import { isEqual } from "lodash";
import { PopUpToast } from "@/lib/toast";

export interface CartState {
  cartItems: CartItem[];
}

export const initialState: CartState = {
  cartItems: [],
};

function uniqForObject<T>(array: T[]): T[] {
  const result: T[] = [];
  for (const item of array) {
    const found = result.some((value) =>
      isEqual(value, item)
    );
    if (!found) {
      result.push(item);
    }
  }
  return result;
}

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
    updateCartList: (
      state: any,
      action: PayloadAction<CartItem[]>
    ) => {
      const updatedCartObj =
        action.payload == undefined
          ? []
          : action.payload;
      // console.log(updatedCartObj);
      if (Object.hasOwn(updatedCartObj, "data")) {
        const { data } = updatedCartObj as any;
        let tempCartItemsList =
          data.length > 0
            ? data.map((item: CartAPIModel) => {
                return {
                  product: {
                    _id: item.productid,
                    name: item.name,
                    category: item.category,
                    imageUrl: item.imageurl,
                    price: item.price,
                  },
                  quantity: item.quantity,
                };
              })
            : [];
        console.log(
          "Cart List from database - Cart Slice"
        );
        for (
          let i = 0;
          i < tempCartItemsList.length;
          i++
        ) {
          for (
            let j = 0;
            j < tempCartItemsList[i].length;
            j++
          ) {
            if (
              tempCartItemsList[i].product._id ==
              tempCartItemsList[j].product._id
            ) {
              tempCartItemsList[i].qty += 1;
            }
          }
        }
        console.log(tempCartItemsList);
        state.cartItems = uniqForObject(
          tempCartItemsList
        );
        // state.cartItems[0].quantity = 3;
        // const cartItem = state.cartItems.find(
        //   (el: CartItem) =>
        //     el.product._id === action.payload._id
        // );
        // if (cartItem) cartItem.qty++;
      }
    },
    addToCart: (
      state: any,
      action: PayloadAction<Product>
    ) => {
      const cartItem = state.cartItems.find(
        (el: CartItem) =>
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
            item.product._id !==
            action.payload._id
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
    increaseQuantity: (
      state,
      action: PayloadAction<CartItem>
    ) => {
      const cartItem = state.cartItems.find(
        (el) =>
          el.product._id ===
          action.payload.product._id
      );
      if (cartItem) cartItem.quantity++;
      else {
        state.cartItems.push({
          product: action.payload.product,
          quantity: 1,
        });
      }
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<CartItem>
    ) => {
      const cartItem = state.cartItems.find(
        (el) =>
          el.product._id ===
          action.payload.product._id
      );
      if (cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity === 0) {
          state.cartItems =
            state.cartItems.filter(
              (el) =>
                el.product._id !==
                action.payload.product._id
            );
        }
      }
    },
    clearCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = initialState.cartItems;
      // PopUpToast("Payment Successful ✅", "success");
    }
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
  updateCartList,
  clearCart
} = cartSlice.actions;
