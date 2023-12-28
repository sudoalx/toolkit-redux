import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 0,
// }

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
        jump: 1
    },
    reducers: {
        decrement: (state) => {
            state.counter -= state.jump
        },
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

            state.counter += state.jump
        },
        incrementBy: (state, action) => {
            state.counter += action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions

// export default counterSlice.reducer