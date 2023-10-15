import React from 'react'
import { useMap } from "react-leaflet";
import { useAppSelector } from "../redux/hooks";
import "./BackToLocationBtn.css";
import userLocationBtn from "../img/userLocationBtn.png"

const BackToLocationBtn = () => {
  const locationState = useAppSelector((state) => state.location);

  return (
    <div>
      <button className='user-location-btn'>
        <img  id="user-location-img" src={userLocationBtn} alt="userlocationBtn-img" />
      </button>
    </div>
  )
}

export default BackToLocationBtn