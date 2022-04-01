import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null,
        counts: {topicsCount: 0, postsCount: 0}
    },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
        setCounts: (state, action) => {
            state.counts = action.payload
        },
        resetUser: state => {
            state.value = null
        }
    }
})

export const {setUser, resetUser, setCounts} = userSlice.actions;

export default userSlice.reducer;