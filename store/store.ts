import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterReducer";
import selectedSlice from "./selectedReducer";

export const store = configureStore(
    {
        reducer: {
            filter : filterSlice.reducer,
            selected : filterSlice.reducer
        }
    }
)