
import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import MainContent from './MainContent/MainContent';
import Modal from './MainContent/Modal';
import Sidebar from './Sidebar/Sidebar';

function App() {

  const [taskCount, setTaskCount] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState(0)
  const [tasks, setTasks] = useState([])
  const [tasksCopy, setTasksCopy] = useState([])

  return (

    <>
      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} tasks={tasks} setTasks={setTasks}
        setTasksCopy={setTasksCopy} />
      <div className={`flex flex-row h-screen font-body ${modalIsOpen ? 'blur-md' : ''}`}>

        <div className='basis-1/6 bg-purple2 background_gradient_sidebar'>
          <Sidebar taskCount={taskCount} />
        </div>
        <div className='basis-5/6 bg-purple1 h-screen background_gradient_main'>
          <MainContent taskCount={taskCount} setTaskCount={setTaskCount} setModalIsOpen={setModalIsOpen} setTaskToEdit={setTaskToEdit}
            tasks={tasks} setTasks={setTasks} setTasksCopy={setTasksCopy} tasksCopy={tasksCopy}
          />
        </div>

      </div>
    </>
  )
}

export default App;
