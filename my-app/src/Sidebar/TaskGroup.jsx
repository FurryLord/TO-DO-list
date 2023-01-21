import { useDispatch, useSelector } from "react-redux";
import { selectGroup } from "../store/slices/groupsSlice";
import { sortByTag } from "../store/slices/tasksSlice";
import { setFilteredTagged } from "../store/slices/filterStateSlice"

function TaskGroup(props) {

  const dispatch = useDispatch();

  const tasksTag = useSelector(state => state.groupsSlice.selectedGroup)

  return (
    <button
      className={`group flex flex-row justify-between px-4 py-4 mb-5  text-start text-white text-xl rounded-xl shadow-md shadow-purple3
      ${tasksTag === props.data.name ? "bg-purple4 cursor-default" : "bg-purple3 transition ease-out delay-75 duration-150 hover:scale-105 hover:shadow-purple4"}`}
      onClick={() => {
        dispatch(sortByTag(props.data.name))
        dispatch(selectGroup(props.data.name))
        dispatch(setFilteredTagged(props.data.name))
      }}
    >
      <div>{props.data.name}</div>
      <div>{props.data.taskCount}</div>
      
    </button>
  );
}

export default TaskGroup;
