
import './App.css';
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { Route,Routes } from 'react-router-dom'
// import NotFound from './Components/NotFound';


function App() {
  return (
    <>
    <div className="App">


        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
        
        </Routes>
   
    </div></>
  );
}

export default App;
