import React from 'react';
import './App.css';
import Navbar from './navigation/';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Inbox from './components/inbox';
import Project from "./components/project";
import Today from "./components/today";
import Upcoming from "./components/upcoming";

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path={"/project/:projectId"} element={<Project />}/>
        <Route path='/inbox' element={<Inbox/>} />
        <Route path='/today' element={<Today/>} />
        <Route path='/upcoming' element={<Upcoming/>} />
    </Routes>
    </Router>
);
}
  
export default App;