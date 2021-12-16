import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice(
    {
        name: 'selected',
        initialState: {
            value: []
        },
        reducers: {
            ADD_SHOE: (state, action) => {
                state.value.push(action.payload) 
            }
        }
    }
)

export default selectedSlice