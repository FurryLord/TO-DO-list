import { useDispatch, useSelector } from "react-redux";
import { useTransition, animated } from "react-spring";
import { openModal } from "../store/slices/modalStateSlice";
import { setTask } from "../store/slices/taskToEditSlice";

function TaskAdder() {
    const dispatch = useDispatch();
    const isFiltered = useSelector((state) => state.filterStateSlice.isFiltered);

    const createTask = () => {
        dispatch(setTask({}));
        dispatch(openModal());
    };

    const buttonTransitions = useTransition(isFiltered, {
        from: {
            opacity: 0,
            y: -100
        },
        enter: {
            opacity: 1,
            y: 0
        }
    })


    return (
        <>
            {buttonTransitions((style, state) => !state &&
                <animated.button
                    style={style}
                    onClick={createTask}
                    className={`transition delay-75 duration-150 ease-out hover:bg-purple2
                flex flex-row justify-center items-center px-4 py-4 bg-purple1 rounded-xl border-dashed border-4 border-purple4`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3/12 h-3/12 text-purple4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </animated.button>)}

        </>
    );
}

export default TaskAdder;
