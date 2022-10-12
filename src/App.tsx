import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SlowPage from './pages/SlowPage';
import './style/style.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';

function App() {
  // Loading state 
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {

    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Custom css for loader
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  `;
  return (
    
    // <HomePage />
    isLoading ? 
    <LoadingScreen/>
    :
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/slow" element={<SlowPage/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;

// function useState(arg0: boolean): [boolean, any] {
//   throw new Error('Function not implemented.');
// }

// function useEffect(arg0: () => void, arg1: never[]) {
//   throw new Error('Function not implemented.');
// }

