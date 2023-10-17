import React, {useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes,Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Post from './pages/Post';
import Posts from './pages/Posts';
  
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/post' element={<Post />} />
        <Route path='/posts' element={<Posts />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
