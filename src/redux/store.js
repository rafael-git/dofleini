import {configureStore} from '@reduxjs/toolkit';
import dashboardReducer from './dashboard/dashboardSlice';
import cardsInfoSlice from './dashboard/cardsInfoSlice';
import certifiedSlice from './dashboard/certifiedSlice';

export const store = configureStore({
   reducer: {
    dashboard: dashboardReducer,
    cards: cardsInfoSlice,
    certifieds: certifiedSlice
}
});