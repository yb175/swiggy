import { configureStore } from "@reduxjs/toolkit";
import restSlice from "./slice/slice1";
import cartSlice from "./slice/slice2";

export const store = configureStore({
    reducer: {
        resturants: restSlice,
        cart : cartSlice
    },
});

export default store; 