import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMaker from './LocationMarker';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setLocation } from '../redux/locationSlice';
import { Location } from '../common/types';
import "./Map.css"
import PostBtn from './PostBtn';
import { User } from '../redux/types';
import PostMaker from './PostMarker';
import { MapProps } from './types';

const Map = (props: MapProps) => {
  
  const { isPost } = props;
  const locationState: Location = useAppSelector((state) => state.location);
  const userState: User = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [routes, setRoutes] = useState<[][]>([]);
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [steps, setSteps] = useState([]);
  const [isNavigating, setIsNavigating] = useState<boolean>(false);

  useEffect(() => { 
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lng = position.coords.longitude;
          const lat = position.coords.latitude
          if (lng !== locationState.lng || lat !== locationState.lat) {
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
                    <PostMaker setDuration={setDuration} setDistance={setDistance} setRoutes={setRoutes} setSteps={setSteps} routes={routes}
                    setIsNavigating={setIsNavigating}
                    />
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