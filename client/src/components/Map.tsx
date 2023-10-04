import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMaker from './LocationMarker';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setLocation } from '../redux/locationSlice';
import { Location } from '../common/types';
import "./Map.css"
import PostBtn from './PostBtn';

const Map = () => {
  const locationState:Location = useAppSelector((state) => state.location);
  const dispatch = useAppDispatch();

  useEffect(() => { 
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setLocation({ lng: position.coords.longitude, lat: position.coords.latitude }));
        },
        (error) => {
          console.error("Error getting user location: ", error);
          alert("we are not allowed to use your current location. So map will not be showen");
        }
      );
    } else {
      console.log("Geolocation is not supported by your browser");
    }
  }, []); 
  
  return (
    <div>
      {(locationState.lng === undefined) ? (
        <div className='map_container skeleton-loader'></div>
      ):
        (
        <div className='map'>
          <MapContainer className='map_container' center={(locationState.lng && locationState.lat) ? { lng: locationState.lng, lat: locationState.lat } : [51.505, -0.09]} zoom={14}>
           <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMaker />
            </MapContainer>
            <PostBtn />
        </div>
        )
      }
    </div>
  )
}

export default Map