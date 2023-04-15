import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componenets/SubComponents/Home';
import About  from './Componenets/SubComponents/About';
import Contact from './Componenets/SubComponents/Contact'; 
import Signup from './Componenets/SubComponents/Signup';
import Login from './Componenets/SubComponents/Login';


const App = () => {
  return (
  <>
  

    <Routes>

    <Route  path='/'  element = {<Home/>} />
    <Route  path='/about'  element = {<About/>} />
    <Route  path='/contact'  element = {<Contact/>} /> 
    <Route  path='/Signup'  element = {<Signup/>} /> 
    <Route  path='/Login'  element = {<Login/>} /> 


    </Routes>


  </>
    
  );
}

export default App;