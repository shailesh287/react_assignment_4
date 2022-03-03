import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Student from './components/Student'
import Contact from './components/Contact'
import './components/style.css'



const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element ={<Home/> }></Route> 
    <Route path='/home' element ={<Home/> }></Route> 
    <Route path='student' element= { <Student/>}  />
    <Route path='contact' element= { <Contact/>}  />
  </Routes>
    
    </>
  )
}

export default App
