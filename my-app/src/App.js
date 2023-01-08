
import './App.css';
import MainContent from './MainContent/MainContent';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className='flex flex-row h-screen font-body'>
      <div className='basis-1/6 bg-purple2 background_gradient_sidebar'>
        <Sidebar />
      </div>
      <div className='basis-5/6 bg-purple1 h-screen background_gradient_main'>
        <MainContent />
      </div>
    </div>
  )
}

export default App;
