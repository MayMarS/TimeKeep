import { createSlice } from "@reduxjs/toolkit";

export const sortMenu = [
    {name: "Popular", sortProperty: "rating"},
    {name: "Price: low to high", sortProperty: "-price"},
    {name: "Price: high to low", sortProperty: "price"}
]

const initialState = {
    categoryId: 0,
    sort: {
        name: 'Popular',
        sortProperty: 'rating',
        open: false,
    },
    currentPage: 1,
    gender: 0,
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload;
        },
        setSortOpen(state, action){
            state.sort.open = action.payload;
        }, 
        setSortType(state, action){
            state.sort = action.payload;
        },
        setCurrentPage(state, action){
            state.currentPage = action.payload;
        },
        setFilters(state, action){
            state.categoryId = Number(action.payload.categoryId);
            state.sort = action.payload.sort;
            state.currentPage = Number(action.payload.currentPage);
        },
        setGender(state, action){
            state.gender = action.payload;
        },
    }
});

export const { setCategoryId, setSortOpen, setSortType, setCurrentPage, setFilters, setGender } = filterSlice.actions;

export default filterSlice.reducer;