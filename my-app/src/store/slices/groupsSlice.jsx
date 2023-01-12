import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    isEdited: false,
    groups: [{title: "Personal", id: nanoid()}],
    count: 0
}

const groupsSlice = createSlice({
    name: "groupsState",
    initialState,
    reducers: {
        addGroup(state, action) {
            state.groups.push(action.payload)
            state.count += 1
        },
        deleteGroup(state, action) {
            if (state.count > 1) {
                state.groups = state.groups.filter(task => task.id !== action.payload)
                state.count -= 1
            }
        },
        setGroupEdited(state, action) {
            state.isEdited = action.payload
        }
    }
})

export const { addGroup, deleteGroup, setGroupEdited } = groupsSlice.actions

export default groupsSlice.reducer