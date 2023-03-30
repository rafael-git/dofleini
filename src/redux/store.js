import {configureStore} from '@reduxjs/toolkit';
import dashboardReducer from './dashboard/dashboardSlice';
import cardsInfoSlice from './dashboard/cardsInfoSlice';
import certifiedSlice from './dashboard/certifiedSlice';
import flagSlice from './flag/flagSlice';
import homeSlice from './homes/homeSlice';
import buttonSlice from './homes/buttonSlice';

export const store = configureStore({
   reducer: {
    dashboard: dashboardReducer,
    cards: cardsInfoSlice,
    certifieds: certifiedSlice,
    flag: flagSlice,
    home: homeSlice,
    button: buttonSlice,
}
});