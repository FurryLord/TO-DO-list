import { combineReducers, configureStore } from '@reduxjs/toolkit'
import taskCountSlice from './slices/taskCountSlice'
import tasksSlice from './slices/tasksSlice'
import modalStateSlice from './slices/modalStateSlice'
import taskToEditSlice from './slices/taskToEditSlice'
import filterStateSlice from './slices/filterStateSlice'
import groupsSlice from './slices/groupsSlice'

const rootReducer = combineReducers({
    taskCountSlice,
    tasksSlice,
    modalStateSlice,
    taskToEditSlice,
    filterStateSlice,
    groupsSlice
})
const store = configureStore({
    reducer: rootReducer,
});

export default store