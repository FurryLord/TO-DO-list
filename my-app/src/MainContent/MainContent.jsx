
import { useState } from "react";
import Filter from "./Filter";
import Searcher from "./Searcher";
import Task from "./Task";
import TaskAdder from "./TaskAdder";

function MainContent(props) {

    const [isFiltered, setIsFiltered] = useState(false)

    const deleteTask = ((id) => {

        console.log("delete task")
        props.setTasks([...props.tasks].filter(task => task.id !== id))

        const buf = [...props.tasks].filter(task => task.id !== id)

        buf.forEach((task, index) => {
            if (task.name.match(/Task/))
                task.name = "Task " + (index + 1)
        })

        props.setTasks([...buf])

        buf.forEach((task, index) => {
            task.id = index
        })

        props.setTasksCopy(buf)

        props.setTaskCount(props.taskCount - 1)
        props.setTaskToEdit({})
    })

    const sortTasks = ((criteria) => {
        console.log(criteria)
        if (criteria === "name") {
            console.log('sort by name')
            props.setTasks([...props.tasks].sort((a, b) => a.name.localeCompare(b.name)))
        }
        else {
            props.setTasks([...props.tasks].sort((a, b) => a.date.localeCompare(b.date)))
        }
        props.setTasksCopy([...props.tasks])
    })

    const searchTasks = ((substr) => {
        setIsFiltered(substr === "" ? false : true);
        props.setTasks([...props.tasksCopy].filter(task => task.name.includes(substr)))

    })


    return (
        <div className="flex flex-col justify-start px-32 h-full">
            <div className="text-5xl text-white text-center pt-10 pb-5 font-group font-semibold border-dashed border-b-4 border-white">
                Personal tasks
            </div>
            <div className="flex flex-row justify-between pt-10">
                <Searcher searchTasks={searchTasks} />
                <Filter sortTasks={sortTasks} />
            </div>
            <div className="grid grid-cols-3 gap-10 content-start my-10 h-full">
                {props.tasks.map((task, number) => <Task data={task} tasks={props.tasks} deleteTask={deleteTask} key={number} setModalIsOpen={props.setModalIsOpen} setTaskToEdit={props.setTaskToEdit} />)}
                <TaskAdder setTasks={props.setTasks} tasks={props.tasks} taskCount={props.taskCount}
                    setTaskCount={props.setTaskCount} setTasksCopy={props.setTasksCopy} isFiltered={isFiltered}  />
            </div>
        </div>
    );
}

export default MainContent;