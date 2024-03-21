import React from 'react'

import Home from './routes/Home'; 
import About from './routes/About'; 
import Signup from './routes/Signup'; 
import Mergesort from './routes/Mergesort';
import Quicksort from './routes/Quicksort';
import Selectionsort from './routes/Selectionsort';
import Bubble from './routes/Bubble';
import { Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path='/signup' element ={<Signup/>}/>
    <Route  path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route  path="/mergesort" element={<Mergesort/>} />
    <Route path="/quicksort" element={<Quicksort/>}/>
    <Route path="/selectionsort" element={<Selectionsort/>}/>
    <Route path="/bubblesort" element={<Bubble/>}/>
    
  </Routes>
  </div>
  );
}


export default App;