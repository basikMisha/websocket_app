import socketIO from 'socket.io-client';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/home';
import ChatPage from './pages/chat';


const socket = socketIO.connect('http://localhost:3001');

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage socket={socket}/>}/>
      <Route path='/chat' element={<ChatPage socket={socket}/>}/>
    </Routes>
  )
}

export default App;
