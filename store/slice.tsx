import { createSlice } from "@reduxjs/toolkit";
import { sliceState } from "./model";

const initialState: sliceState = {
    key: 'val'
}

const slice = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        reducer: (state, actions) => {false}
    }
})

export default slice.reducer