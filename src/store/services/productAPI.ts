import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";

import { Product } from "@/type";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    search: builder.query<Product[], string>({
      query: (q) => (`product?gender=${q}`),
      providesTags: (result, error, search) => [{type: "product", search}]
    }),
  }),
});

