import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
function App() {
  return (
    <div className="space-y-2">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
