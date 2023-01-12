import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [],
    tasksCopy: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload)
            state.tasksCopy.push(action.payload)
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
            state.tasksCopy = [...state.tasks]
        },
        editTask(state, action) {
            state.tasks = state.tasks.map(
                task => task.id === action.payload.id ? task = action.payload : task = task
            )
            state.tasksCopy = [...state.tasks]
        },
        filterTasks(state, action) {
            if (action.payload === "name") {
                state.tasks.sort((a, b) => a.title.localeCompare(b.title))
            }
            else {
                state.tasks.sort((a, b) => a.date.localeCompare(b.date))
            }
            state.tasksCopy = [...state.tasks]
        },
        searchTasks(state, action) {
            state.tasks = [...state.tasksCopy].filter(task => task.title.includes(action.payload))
        }


    }
})

export const { addTask, deleteTask, editTask, filterTasks, searchTasks } = tasksSlice.actions

export default tasksSlice.reducer