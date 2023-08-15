import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { CartItem, Product, CartAPIInsertType, CartAPIModel } from "@/type";
import { BASE_PATH } from "../../../sanity/lib/base";

export const cartAPI = createApi({
  reducerPath: "cartAPI",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_PATH,
  }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getCartItems: builder.query<CartItem[], null>(
      { query: () => "/api/cart" }
    ),
    addToCartMutation: builder.mutation<CartAPIModel, CartAPIModel>({
      query: (payload: CartAPIModel) => ({
        url: "api/cart",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {useGetCartItemsQuery, useAddToCartMutationMutation} = cartAPI;
