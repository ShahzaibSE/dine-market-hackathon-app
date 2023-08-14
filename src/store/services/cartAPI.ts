import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { CartItem, Product, CartAPIRequest } from "@/type";
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
      { query: () => "/cart" }
    ),
    addToCartMutation: builder.mutation<CartAPIRequest, CartAPIRequest>({
      query: (payload: CartAPIRequest) => ({
        url: "/cart",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const {useGetCartItemsQuery, useAddToCartMutationMutation} = cartAPI;
