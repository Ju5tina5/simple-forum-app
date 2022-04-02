import {createSlice} from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        value: null,
    },
    reducers: {
        setItem: (state, action) => {
            state.value = action.payload
        },
        resetItem: state => {
          state.value = null;
        }
    }
})

export const {setItem, resetItem} = itemSlice.actions;
export default itemSlice.reducer;