import { createSlice } from "@reduxjs/toolkit";
import { getLocalData } from '../../Components/Main/ViewedProducts/ViewedProducts';

const initialState = {
    products: getLocalData()
};

const viewedSlice = createSlice({
    name: 'viewed',
    initialState,
    reducers: {

        showViewedProduct(state, action){
            const findProduct = state.products.find(obj => obj.id === action.payload.id);
            if(findProduct){
                return;
            } else{
                state.products.push(action.payload);
            }
        }
    }
})

export const { showViewedProduct } = viewedSlice.actions;

export default viewedSlice.reducer;
