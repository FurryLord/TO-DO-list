import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    task :  {}
}

const taskToEditSlice = createSlice({
    name: "taskToEdit",
    initialState,
    reducers: {
        setTask(state, action) {
            state.task = action.payload
        },
    }
})

export const { setTask } = taskToEditSlice.actions

export default taskToEditSlice.reducer