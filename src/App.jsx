import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './home/Home'
import DarkMode from './darkmode/DarkMode';
import ButtomNav from './buttomnav/ButtomNav';
import About from './about/About';
import Project from './project/Project';
import Resume from './resume/Resume';
import Nav from './nav/Nav';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/darkmode' element={<DarkMode/>}/>
      <Route path='/buttomnav' element={<ButtomNav/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Routes>
    </>
  )
}

export default App
