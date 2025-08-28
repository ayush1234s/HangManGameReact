import { Route, Routes } from 'react-router-dom';
import './App.css'
import StartGame from './pages/StartGame';
import PlayGameContainer from './pages/PlayGameContainer';
import HomePage from './pages/HomePage';

function App() {

  return (

    
      <Routes>
        <Route path='/start' element={<StartGame/>} />
        <Route path='/play' element={<PlayGameContainer />} />
        <Route path='/' element={ <HomePage/> } />
      </Routes>
  );
}

export default App

