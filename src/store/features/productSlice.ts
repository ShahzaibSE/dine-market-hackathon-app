import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/type";

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: [],
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setProducts(state: any, action: PayloadAction<Product>) {
      try {
        state.products = action.payload;
      } catch (err) {
        throw err;
      }
    },
  },
});

export const { setProducts } = searchSlice.actions;
export default searchSlice.reducer;
