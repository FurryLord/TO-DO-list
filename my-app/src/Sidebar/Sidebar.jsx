import { useSelector } from 'react-redux';
import TaskGroup from './TaskGroup';
import TaskGroupAdder from './TaskGroupAdder';

function Sidebar() {

    const groups = useSelector(state => state.groupsSlice.groups)

    return (
        <div className="flex flex-col justify-start  mx-8 h-screen">
            <div className='mt-8 px-2 py-3 bg-purple3 text-center text-white text-4xl rounded'>
                <div className='text-transparent bg-clip-text bg-gradient-to-b from-white to-purple4  font-logo'>
                    TO-DO LIST
                </div>
            </div>
            <div className='basis-3/12'>
            </div>
            {groups.map((group, number) => <TaskGroup data={group} key={number} />)}
            <TaskGroupAdder />
        </div>
    );
}

export default Sidebar;