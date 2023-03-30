import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    flag: false,
}

export const flagSlice = createSlice({
    name: 'flag',
    initialState: initialState,
    reducers: {
        flagToggle : (state, action) => {state.flag = action.payload},
    }
})


export const { flagToggle } = flagSlice.actions

export default flagSlice.reducer;