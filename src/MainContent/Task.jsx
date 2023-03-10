import { useDispatch } from "react-redux";
import { deleteTask } from "../store/slices/tasksSlice";
import { setTask } from "../store/slices/taskToEditSlice";
import { openModal } from "../store/slices/modalStateSlice";
import { deleteGroup } from "../store/slices/groupsSlice";


function Task(props) {

    const dispatch = useDispatch();

    return (
        <>
            <div className="flex flex-row justify-between align-center">
                <div className="text-2xl text-center font-semibold">
                    {" "}
                    {props.data.title}
                </div>
                <div className="transition delay-0 duration-100 ease-out group-hover:visible
            invisible flex flex-row">
                    <svg
                        onClick={() => {
                            dispatch(setTask(props.data));
                            dispatch(openModal());
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="transition ease-in-out delay-150 duration-300 
            hover:text-teal-600 hover:cursor-pointer hover:scale-125 w-6 h-6 mr-2 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                    </svg>
                    <svg
                        onClick={() => {
                            dispatch(deleteTask(props.data.id));
                            dispatch(deleteGroup(props.data.tag));
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="transition ease-in-out delay-150 duration-300 
            hover:text-rose-600 hover:cursor-pointer hover:scale-125 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </div>
            </div>

            <div className="pt-4">{props.data.description}</div>

            <div className="flex flex-row justify-between align-center mt-10">
                <div
                    className={`rounded-xl text-center text-black px-3 py-1 ${props.data.color}`}
                >
                    {props.data.tag}
                </div>

                <div className="flex flex-row align-center  text-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                    </svg>

                    <div className="ml-3">{props.data.date}</div>
                </div>
            </div>
        </>
    );
}

export default Task;
