import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Contato from './components/contato/Contato';
import Persson from './components/persson/Persson';
import './app.css';

function App() {

  return (
    <ThemeContext.Provider>
      <Header/>
      <div>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contato" element={<Contato />} />
          <Route exact path="/persson" element={<Persson />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
