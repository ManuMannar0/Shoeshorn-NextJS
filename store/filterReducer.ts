import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice(
    {
        name: 'filter',
        initialState: {
            value: ''
        },
        reducers: {
            FILTER_UPDATE: (state, action) => {
                state.value = action.payload
            }
        }
    }
)

export default filterSlice