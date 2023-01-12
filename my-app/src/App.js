

import { useSelector } from 'react-redux';
import './App.css';
import MainContent from './MainContent/MainContent';
import Modal from './MainContent/Modal';
import Sidebar from './Sidebar/Sidebar';

function App() {

  const modalState = useSelector(state => state.modalStateSlice.isOpen)

  return (
    <>
      <Modal  />
      <div className={`flex flex-row h-screen font-body ${modalState ? 'blur-md' : ''}`}>

        <div className='basis-1/6 bg-purple2 background_gradient_sidebar'>
          <Sidebar />
        </div>
        <div className='basis-5/6 bg-purple1 h-screen background_gradient_main'>
          <MainContent />
        </div>
        
      </div>
    </>
  )
}

export default App;
