import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/productSlice";
import {productAPI} from "./features/productAPI";
import { cartReducer } from "./features/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


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
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

