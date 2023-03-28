import {configureStore} from '@reduxjs/toolkit';
import dashboardReducer from './dashboard/dashboardSlice';
import cardsInfoSlice from './dashboard/cardsInfoSlice';

export const store = configureStore({
   reducer: {
    dashboard: dashboardReducer,
    cards: cardsInfoSlice
}
});