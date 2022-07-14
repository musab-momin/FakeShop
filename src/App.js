import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Home'
import Stack from './pages/Stack'
import About from './pages/About'



function App() {
  return (
    <>
   <Routes>
      <Route  path='' element={<Home />}  exact/>
      <Route path='/product/:id' element={<Product />} exact/>
      <Route path='/stack' element={<Stack />} exact/>
      <Route path='/about' element={<About />} exact/>
   </Routes>
   </>
  );
}

export default App;
