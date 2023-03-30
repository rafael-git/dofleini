import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        title: 'Design my showroom',
        subtitle: 'Connect your IP to the market'
    },
    {
        title: 'Document in 3D',
        subtitle: 'Build your own experience in 3D'
    }
]

export const buttonSlice = createSlice({
    name: 'button',
    initialState: initialState,
    reducers: {
        
    }
})


export default buttonSlice.reducer;