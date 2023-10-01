import React, {useEffect } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { watchAuthState } from './redux/authSlice';
function App() {

  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state);
  useEffect(() => {
    dispatch(watchAuthState);
  },[]);
  console.log(user);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth/>} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
