import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null,
        counts: {topicsCount: 0, postsCount: 0},
        favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.favorites).length : 0,
        seenActivities: false,
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
        },
        setFavoritesCount: (state, action) => {
            state.favorites = action.payload
        },
        updateUserAvatar: (state, action) => {
            state.value.avatar = action.payload;
        },
        decreaseTopicCount: state => {
            state.counts.topicsCount -= 1;
        },
        decreasePostsCount: state => {
            state.counts.postsCount -=1
        },
        setSeenActivities: state => {
            state.seenActivities = !state.seenActivities;
        }
    }
})

export const {setUser, resetUser, setCounts, setFavoritesCount, updateUserAvatar, decreaseTopicCount, decreasePostsCount, setSeenActivities} = userSlice.actions;

export default userSlice.reducer;