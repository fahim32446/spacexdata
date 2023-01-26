import { configureStore } from "@reduxjs/toolkit";
import {spacexApi} from './spacexApi';

export const store = configureStore({
    reducer:{
        [spacexApi.reducerPath]: spacexApi.reducer,
    },
    middleware : (gDM) => gDM().concat(spacexApi.middleware),
 });