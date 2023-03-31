import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      open: false 
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        toggleModal : (state, action) => {state.open = action.payload},
        
    }
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer;