import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: [
        {
            title: 'Listing Designer',
            subTitle: 'Marketing bundles',
            description: 'Looking to help your clients visualize the opportunities in outdated homes, land, or new developments? Now with the modwell enhanced listing design studio you can unlock the potential of any home in interactive 3D.',
            imgURL: ''
        },
        {
            title: 'Design Style A.I',
            subTitle: 'Home style preferences',
            description: "Your clients know what they like—and what they don't — but what’s their design style? Use our quiz to find out what styles fit your clients the best by dreaming up their perfect home, one room at a time.",
            imgURL: ''
        },
        {
            title: 'Moodboard A.I',
            subTitle: 'Design based search, visual communication',
            description: "The world is visual — everyone communicates via Instagram and Pinterest — shouldn’t real estate be the same? Use our moodboards to collaborate with your clients in an entirely new interactive and fun way.",
            imgURL: ''
        },
        {
            title: 'Lead Funnel',
            subTitle: 'Social assets, social sharing, network funnel',
            description: "In real estate, your network is your net worth. Leverage the modwell social sharing capabilities to drive up excitement amongst your audience and convert new leads from your social channels.",
            imgURL: ''
        },
        {
            title: 'Lead Converter',
            subTitle: 'Digital buisness card, members to client benefits',
            description: "Today there are more real estate agents competing for clients than ever before. Not to worry, we build you a secret weapon. Use your modwell digital buisness card to walk into listing or buyer appointments with a strong, elevated point of difference.",
            imgURL: ''
        },
        {
            title: '3D Home Vault',
            subTitle: 'Client documentation storage, design hub, resource center',
            description: "We all know buying a home is only the first step in your clients long homeownership journey. With the modwell 3D home vault you can prepare them for what comes next, help them document and manage their asset, and stay involved in their sphere, long after the sale.",
            imgURL: ''
        },        
    ],
    reducers: {
        
    }
})

export default dashboardSlice.reducer;