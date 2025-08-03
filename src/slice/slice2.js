import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItems: [], cnt : 0},
    reducers: {

        // Reducer Function to add items to the cart at initial state
        addToCart : ((state,action)=>{
            state.cartItems.push({...action.payload,qty:1})
            state.cnt++ ; 
        }),

        // If the item is allready present in the cart then increase the quantity on increament 
        increamentQty : ((state,action)=>{
            const item = state.cartItems.find((item)=>item.id === action.payload)
            item.qty++ ; 
            state.cnt++ ; 
        }),

        // If the item is allready present in the cart then decrease the quantity on decreament
        decreamentQty : ((state,action)=>{
            const item = state.cartItems.find((item)=>item.id === action.payload)
            item.qty--
            state.cartItems = state.cartItems.filter((item)=>item.qty !== 0) ; 
            state.cnt-- ; 
        })
    },
});

export const { addToCart, increamentQty, decreamentQty } = cartSlice.actions;
export default cartSlice.reducer;