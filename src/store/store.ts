import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./productSlice";


export const store = configureStore({
    reducer: {
        search: searchReducer
    },
})



