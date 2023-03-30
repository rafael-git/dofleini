import { createSlice } from "@reduxjs/toolkit";


const initialState = {
      address: '6 Pheasant Woods Lane EH New York',
      beds: '2',
      baths: '2',
      sqft: '3400',
      acres: '2',
      homeProfile: 'Beginner'  
}

export const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        
    }
})




export default homeSlice.reducer;