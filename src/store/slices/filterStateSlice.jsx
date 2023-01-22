import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isFiltered: false
}

const filterStateSlice = createSlice({
    name: "filterState",
    initialState,
    reducers: {
        setFilteredSearched(state, action) {
            action.payload === "" ? state.isFiltered = false : state.isFiltered = true
        },
        setFilteredTagged(state, action) {
            console.log(action.payload)
            action.payload === "All" ? state.isFiltered = false : state.isFiltered = true
        }
    }
})

export const { setFilteredSearched, setFilteredTagged } = filterStateSlice.actions

export default filterStateSlice.reducer