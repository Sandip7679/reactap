import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [mystate,setmystaate] = useState(false);
  return (
    // <>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //   </Routes>
    // </>
    <div>
      Hello World
    </div>
  );
}

export default App;