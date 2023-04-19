import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addProduct(state, action){
        //     state.products.push(action.payload);
        //     state.totalPrice = state.products.reduce((sum, obj) => {
        //         return obj.price + sum;
        //     }, 0)
        // },
        addProduct(state, action){
            const findProduct = state.products.find(obj => obj.id === action.payload.id);
            if(findProduct){
                findProduct.count++;
            } else{
                state.products.push({
                    ...action.payload,
                    count: 1
                });
            }
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },
        plusProduct(state, action){
            const findProduct = state.products.find(obj => obj.id === action.payload);
            if(findProduct){
                findProduct.count++;
            }
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },
        minusProduct(state, action){
            const findProduct = state.products.find(obj => obj.id === action.payload);
            if(findProduct){
                findProduct.count--;
            }
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },
        removeProduct(state, action){
            state.products = state.products.filter((obj) => obj.id !== action.payload);
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },
        clearAll(state){
            state.products = [];
            state.totalPrice = 0;
        },
    }
});

export const { addProduct, plusProduct, minusProduct, removeProduct, clearAll } = cartSlice.actions;

export default cartSlice.reducer;