import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './style/style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function App() {
  return (
    // <HomePage />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
