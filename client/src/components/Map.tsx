import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMaker from './LocationMarker';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setLocation } from '../redux/locationSlice';
import { Location } from '../common/types';
import "./Map.css"
import PostBtn from './PostBtn';
import { User } from '../redux/types';

interface Props { 
  isPost:boolean
}


const Map = (props: Props) => {
  
  const { isPost } = props;
  const locationState: Location = useAppSelector((state) => state.location);
  const userState: User = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => { 
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lng = position.coords.longitude;
          const lat = position.coords.latitude
          if (lng !== locationState.lng || lat !== locationState.lat) {
            console.log("成功");
            console.log(lng,lat);
            dispatch(setLocation({ lng: lng, lat: lat}));
          }
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
    <>
      {/* the map for post */}
      {isPost ? (
        <>   
          {(locationState.lng === undefined) ? (
            <div className='post-map_container skeleton-loader'></div>
          ) : (
          <div className='post-map'>
            <MapContainer className='post-map_container' center={(locationState.lng && locationState.lat) ? { lng: locationState.lng, lat: locationState.lat } : [51.505, -0.09]} zoom={15}>
             <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
                <LocationMaker />
                {/* user posts marker should be here */}
              </MapContainer>
          </div>
          )}
      </>
      ) : (
      // this map down below for home 
    <>
      {(locationState.lng === undefined) ? (
        <div className='map_container skeleton-loader'></div>
      ):
        (
        <div className='map'>
          <MapContainer className='map_container' center={(locationState.lng && locationState.lat) ? { lng: locationState.lng, lat: locationState.lat } : [51.505, -0.09]} zoom={15}>
           <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              <LocationMaker />
              {/* user posts marker should be here */}
            </MapContainer>
            {userState.isLoggedIn && (<PostBtn/>)}
        </div>
        )
      }
    </>
    )}
    </>
  )
}

export default Map