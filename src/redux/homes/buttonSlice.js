import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id:'1',
        title: 'Design my showroom',
        subtitle: 'Connect your IP to the market'
    },
    {
        id:'2',
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