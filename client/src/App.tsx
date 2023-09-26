import React, {useEffect , useState} from 'react';
import './App.css';
import Cookies from 'js-cookie';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
