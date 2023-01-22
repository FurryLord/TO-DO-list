import { useTransition, animated } from "react-spring";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import Searcher from "./Searcher";
import Task from "./Task";
import TaskAdder from "./TaskAdder";
import { nanoid } from "nanoid";

function MainContent() {
  const tasks = useSelector((state) => state.tasksSlice.tasks);
  const tasksTag = useSelector((state) => state.groupsSlice.selectedGroup);

  const tasksTransitions = useTransition(tasks, {
    from: {
      y: -100,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    leave: {
      y: 100,
      opacity: 0,
    },
  });

  const tagTransitions = useTransition(tasksTag, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="flex flex-col justify-start px-32 h-full">
      <div className="text-5xl text-white text-center pt-10 pb-5 font-group font-semibold border-dashed border-b-4 border-white">
        {tagTransitions((style, tag) => (
          <animated.span style={style}>{tag} </animated.span>
        ))}{" "}
        tasks
      </div>

      <div className="flex flex-row justify-between pt-10">
        <Searcher />
        <Filter />
      </div>
      <div
        className="grid grid-cols-3 gap-10 content-start my-10 h-full overflow-auto 
      scrollbar-thin scrollbar-track-purple2 scrollbar-thumb-purple1 scrollbar-rounded-md"
      >
        {tasksTransitions((style, task) => (
          <animated.div
            className="flex flex-col justify-between align-center group text-white bg-gradient-to-br from-purple4 to-purple3 p-6 rounded-lg shadow-md shadow-purple4"
            style={style}
          >
            <Task data={task} key={nanoid()} />
          </animated.div>
        ))}

        <TaskAdder />
      </div>
    </div>
  );
}

export default MainContent;
