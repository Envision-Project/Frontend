import React from 'react';
import './App.css';
import Navbar from './navigation/';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
    </Routes>
    </Router>
);
}
  
export default App;