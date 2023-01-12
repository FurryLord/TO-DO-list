

import { useSelector } from "react-redux";
import Filter from "./Filter";
import Searcher from "./Searcher";
import Task from "./Task";
import TaskAdder from "./TaskAdder";

function MainContent() {

    const tasks = useSelector(state => state.tasksSlice.tasks)


    return (
        <div className="flex flex-col justify-start px-32 h-full">
            <div className="text-5xl text-white text-center pt-10 pb-5 font-group font-semibold border-dashed border-b-4 border-white">
                Personal tasks
            </div>
            <div className="flex flex-row justify-between pt-10">
                <Searcher  />
                <Filter  />
            </div>
            <div className="grid grid-cols-3 gap-10 content-start my-10 h-full">
                {tasks.map((task, number) => <Task data={task} key={number} />)}
                <TaskAdder/>
            </div>
        </div>
    );
}

export default MainContent;