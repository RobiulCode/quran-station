import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AudioQuran from './Component/AudioQuran/AudioQuran';
import Header from './Component/AudioQuran/Header/Header';
import Footer from './Component/AudioQuran/Footer/Footer';
import About from './Component/AudioQuran/About/About';
import ReadQuran from './Component/ReadQuran/ReadQuran';
import Sura from './Component/ReadQuran/Sura/Sura';
import LearnQuran from './Component/LearnQuran/LearnQuran';
import LearnKalima from './Component/Kalima/LearnKalima';
import KalimaDetails from './Component/Kalima/KalimaDetails.js/KalimaDetails';
import Home from './Component/Home/Home'
import Error404 from './Component/Error404/Error404';




function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/learnQuran' element={<LearnQuran/>}></Route>
          <Route path='/readQuran' element={<ReadQuran/>}></Route>
          <Route path='/sura/:id' element={<Sura/>}></Route>
          <Route path='/listenQuran' element={<AudioQuran/>}></Route>
          <Route path='/kalima' element={<LearnKalima/>}></Route>
          <Route path='/kalima/:id' element={<KalimaDetails/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<Error404/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
