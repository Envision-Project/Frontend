import React from 'react';
import './App.css';
import Navbar from './navigation/';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Inbox from './components/inbox';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/inbox' element={<Inbox/>} />
    </Routes>
    </Router>
);
}
  
export default App;