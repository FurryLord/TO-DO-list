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
            state.tasksCopy = state.tasksCopy.filter(task => task.id !== action.payload)
        },
        editTask(state, action) {
            state.tasks = state.tasks.map(
                task => task.id === action.payload.id ? task = action.payload : task = task
            )
            state.tasksCopy = [...state.tasks]
        },
        filterTasks(state, action) {
            state.tasks.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
        },
        searchTasks(state, action) {
            state.tasks = [...state.tasksCopy].filter(task => task.title.includes(action.payload))
        },
        sortByTag(state, action) {
            if (action.payload !== "All") {
                state.tasks = [...state.tasksCopy].filter(task => task.tag === action.payload)
            }
            else {
                state.tasks = [...state.tasksCopy]
            }
        }

    }
})

export const { addTask, deleteTask, editTask, filterTasks, searchTasks, sortByTag } = tasksSlice.actions

export default tasksSlice.reducer