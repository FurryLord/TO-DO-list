import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

const taskCountSlice = createSlice({
    name: "taskCount",
    initialState,
    reducers: {
        increaseNumber(state) {
            state.count += 1
            console.log(state.count)
        },
        decreaseNumber(state) {
            state.count -= 1
        },
    }
})

export const { increaseNumber, decreaseNumber } = taskCountSlice.actions

export default taskCountSlice.reducer