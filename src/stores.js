import { configureStore } from "@reduxjs/toolkit";
import restSlice from "./slice/slice1";

export const store = configureStore({
    reducer: {
        resturants: restSlice,
    },
});

export default store; 