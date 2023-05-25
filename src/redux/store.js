import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import viewed from "./slices/viewedSlice";

export const store = configureStore({
    reducer: {
        filter,
        cart,
        viewed
    }
});

