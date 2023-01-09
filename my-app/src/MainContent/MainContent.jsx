import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Filter from "./Filter";
import Searcher from "./Searcher";
import Task from "./Task";
import TaskAdder from "./TaskAdder";

function MainContent(props) {

    const deleteTask = ((id) => {

        console.log("delete task")
        props.setTasks([...props.tasks].filter(task => task.id !== id))

        const buf = [...props.tasks].filter(task => task.id !== id)
        buf.forEach((task, index) => {
            task.name = "Task " + (index + 1)
            task.id = index
        })
        
        props.setTasks([...buf])
        props.setTaskCount(props.taskCount - 1)
    })


    return (
        <div className="flex flex-col justify-start px-32 h-full">
            <div className="text-5xl text-white text-center pt-10 pb-5 font-group font-semibold border-dashed border-b-4 border-white">
                Personal tasks
            </div>
            <div className="flex flex-row justify-between pt-10">
                <Searcher />
                <Filter />
            </div>
            <div className="grid grid-cols-3 gap-10 content-start my-10 h-full">
                {props.tasks.map((task, number) => <Task data={task} tasks={props.tasks} deleteTask={deleteTask} key={number} setModalIsOpen={props.setModalIsOpen} setTaskToEdit={props.setTaskToEdit} />)}
                <TaskAdder setTasks={props.setTasks} tasks={props.tasks} taskCount={props.taskCount} setTaskCount={props.setTaskCount} />
            </div>
        </div>
    );
}

export default MainContent;