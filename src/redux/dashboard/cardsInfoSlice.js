import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id:'1',
        title: 'How to invite a client to modwell',
        info: 'Relationship Management'
    },
    {
        id:'2',
        title: 'How to build a home vault',
        info: 'Client documentation storage, resource center'
    },
    {
        id:'3',
        title: 'How to build a digital buisness card',
        info: 'Prospecting, lead conversion, client benefits'
    },
    {
        id:'4',
        title: 'How to build an enhanced listing',
        info: 'Marketing bundles'
    },
    {
        id:'5',
        title: 'How to navigate an enhanced listing',
        info: 'Marketing bundles'
    },
    {
        id:'6',
        title: 'How to share your portfolio',
        info: 'Marketing bundles, lead funnel'
    },
    {
        id:'7',
        title: 'How to build a moodboard',
        info: 'How to build a moodboard'
    },
    {
        id:'8',
        title: 'How to share a moodboard',
        info: 'Social assets, social sharing, lead funnel'
    },
    {
        id:'9',
        title: 'How to create a social asset',
        info: 'Social assets, social sharing, lead funnel'
    },
           
];

export const cardsInfoSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        
    }
})

export default cardsInfoSlice.reducer;