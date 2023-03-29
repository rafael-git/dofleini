import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: '3D Desing',
        value: 'Certified',
        icon: '',
        description:''
    },
    {
        title: 'Home Vault',
        value: 'Certified',
        icon: '',
        description:''
    },
    {
        title: 'Metaverse',
        value: 'Certified',
        icon: '',
        description:''
    },
    {
        title: 'Digital IP',
        value: 'Certified',
        icon: '',
        description:''
    },
         
];

export const certifiedSlice = createSlice({
    name: 'certificates',
    initialState: initialState,
    reducers: {
        
    }
})

export default certifiedSlice.reducer;