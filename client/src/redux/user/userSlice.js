import { createSlice } from '@reduxjs/toolkit'


// creating the initial state 

const initialState = {
    currentUser: null,
    loading: false,
    error: false,

};

// creating user slice (slice is basically a particular state)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },

        signInSuccess: (state, action) => {

            // action.payload is simply the data we are getting 
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },

        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});


export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;  