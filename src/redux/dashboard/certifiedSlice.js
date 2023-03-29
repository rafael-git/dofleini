import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: '3D Desing',
        certified: true,
        icon: '',
        description:''
    },
    {
        title: 'Home Vault',
        certified: true,
        icon: '',
        description:''
    },
    {
        title: 'Metaverse',
        certified: true,
        icon: '',
        description:''
    },
    {
        title: 'Digital IP',
        certified: false,
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