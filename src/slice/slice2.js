import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItems: {} },
    reducers: {
        addItems : (state, action) => {
            state.cartItems.push(action.payload);
            console.log(state.cartItems);
        },
        
    },
});

export const { addItems } = cartSlice.actions;
export default cartSlice.reducer;