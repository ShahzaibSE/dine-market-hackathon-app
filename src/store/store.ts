import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/productSlice";
import {productAPI} from "./services/productAPI";
import { cartReducer } from "./features/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartAPI } from "./services/cartAPI";


export const store = configureStore({
    reducer: {
        search: searchReducer,
        productAPI: productAPI.reducer,
        cart: cartReducer,
        cartAPI: cartAPI.reducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    // middleware(getDefaultMiddleware) {
    //     return getDefaultMiddleware().concat(productAPI.middleware);
    // }
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat([productAPI.middleware,cartAPI.middleware]);
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

