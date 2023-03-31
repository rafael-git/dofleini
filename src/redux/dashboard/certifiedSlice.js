import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: '3D Desing',
        certified: true,
        icon: '',
        description:'Become a Modwell 3D Design Specialists and help your clients navigate the outdated market'
    },
    {
        title: 'Home Vault',
        certified: true,
        icon: '',
        description:'Become a Modwell Home Vault Specialists and help your clients manage their Largest Asset'
    },
    {
        title: 'Metaverse',
        certified: true,
        icon: '',
        description:'Become a Modwell Meta Agent and help your clients navigate the metaverse'
    },
    {
        title: 'Digital IP',
        certified: false,
        icon: '',
        description:'Become a Modwell Digital IP Specialists and help your clients manage their Intellectual Property'
    },
         
];

export const certifiedSlice = createSlice({
    name: 'certificates',
    initialState: initialState,
    reducers: {
        
    }
})

export default certifiedSlice.reducer;