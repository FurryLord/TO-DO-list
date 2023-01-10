function TaskAdder(props) {

    const createTask = (() => {
        
        props.setTaskCount(props.taskCount + 1)
        console.log(props.taskCount)
        props.setTasks([...props.tasks, { name: `Task ${props.taskCount + 1}`, id: props.taskCount }])
        props.setTasksCopy([...props.tasks, { name: `Task ${props.taskCount + 1}`, id: props.taskCount }])
        console.log(props.taskCount)
    }
        
    )

    return (
        <button onClick={createTask}
            className={`${props.isFiltered ? "hidden" : "flex"} flex-row justify-center items-center px-4 py-4 bg-purple1 rounded-xl border-dashed border-4 border-purple4`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3/12 h-3/12 text-purple4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    );
}

export default TaskAdder;