import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    groups: [{ name: "All", taskCount: 0 }],
    selectedGroup: "All"
}

const groupsSlice = createSlice({
    name: "groupsState",
    initialState,
    reducers: {
        addGroup(state, action) {
            const groupIndex = state.groups.findIndex(group => group.name === action.payload)
            if ((groupIndex) !== -1) {
                state.groups[groupIndex].taskCount += 1
            }
            else {
                state.groups.push({ name: action.payload, taskCount: 1 })
            }
            state.groups[0].taskCount += 1
        },
        deleteGroup(state, action) {
            const groupIndex = state.groups.findIndex(group => group.name === action.payload)
            if (state.groups[groupIndex].taskCount === 1) {
                state.groups.splice(groupIndex, 1)
            }
            else {
                state.groups[groupIndex].taskCount -= 1
            }
            state.groups[0].taskCount -= 1
        },
        selectGroup(state, action) {
            state.selectedGroup = action.payload
        }
    }
})

export const { addGroup, deleteGroup, selectGroup} = groupsSlice.actions

export default groupsSlice.reducer