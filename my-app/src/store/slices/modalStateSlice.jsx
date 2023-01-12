import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen : false
}

const modalStateSlice = createSlice({
    name: "modalState",
    initialState,
    reducers: {
        openModal(state) {
            state.isOpen = true
        },
        closeModal(state) {
            state.isOpen = false
        }
    }
})

export const { openModal, closeModal } = modalStateSlice.actions

export default modalStateSlice.reducer