import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isFiltered : false
}

const filterStateSlice = createSlice({
    name: "filterState",
    initialState,
    reducers: {
        setFiltered(state, action) {
            if (action.payload === "") {
                state.isFiltered = false
            }
            else {
                state.isFiltered = true
            }
        }
    }
})

export const { setFiltered} = filterStateSlice.actions

export default filterStateSlice.reducer