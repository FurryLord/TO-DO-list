import { useDispatch } from "react-redux";
import { filterTasks } from "../store/slices/tasksSlice";

function Filter() {

    const dispatch = useDispatch()


    return (
        <select onChange={(e) => dispatch(filterTasks(e.target.value))} className="bg-purple3 basis-1/6 text-white text-xl rounded-md py-3 px-3">
            <option selected disabled value="">Sort by</option>
            <option value="date">By time</option>
            <option value="title" >By title</option>
        </select>
    );
}

export default Filter;