import React, { useEffect, useState } from 'react';
import "./Landing.css";
import { useNavigate } from 'react-router-dom';

function Landing() {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    // <div className='landing'>
    <div className='landing__logo'>
      <p className='landing__log_txt'>
        Toilet Is
        Right There
      </p>
      </div>
  )
}

export default Landing