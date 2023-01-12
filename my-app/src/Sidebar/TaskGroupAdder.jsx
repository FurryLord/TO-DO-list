import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addGroup, setGroupEdited } from "../store/slices/groupsSlice";

function TaskGroupAdder() {

    const dispatch = useDispatch()

    return (
        <button className="flex flex-row justify-center px-4 py-4 bg-purple2 rounded-xl border-dashed border-2 border-white"
            onClick={() => {
                dispatch(addGroup({
                    title: "Group",
                    id: nanoid(),
                }))
                dispatch(setGroupEdited(true))
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

        </button>
    );
}

export default TaskGroupAdder;