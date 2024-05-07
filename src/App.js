import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import About from './components/About';




function App() {
  return (

    <>
      <Navigation />
      <Routes>
              <Route path='/' element={<Homepage />}></Route>
              
             
      </Routes>
      <Footer />




    </>






  )
}

export default App;



// import React,{useState} from 'react';
// import {NavLink} from 'react-router-dom';


// @import url('https://fonts.googleapis.com/css?family=Source+3ode+Pro:300');