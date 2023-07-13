import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./productSlice";
import {productAPI} from "./productAPI";
import { cartReducer } from "./cartSlice";


export const store = configureStore({
    reducer: {
        search: searchReducer,
        productAPI: productAPI.reducer,
        cart: cartReducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(productAPI.middleware);
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

