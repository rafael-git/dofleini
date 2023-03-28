import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        title: 'How to invite a client to modwell',
        info: 'Relationship Management'
    },
    {
        title: 'How to build a home vault',
        info: 'Client documentation storage, resource center'
    },
    {
        title: 'How to build a digital buisness card',
        info: 'Prospecting, lead conversion, client benefits'
    },
    {
        title: 'How to build an enhanced listing',
        info: 'Marketing bundles'
    },
    {
        title: 'How to navigate an enhanced listing',
        info: 'Marketing bundles'
    },
    {
        title: 'How to share your portfolio',
        info: 'Marketing bundles, lead funnel'
    },
    {
        title: 'How to build a moodboard',
        info: 'How to build a moodboard'
    },
    {
        title: 'How to share a moodboard',
        info: 'Social assets, social sharing, lead funnel'
    },
    {
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