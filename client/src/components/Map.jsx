import React, { useEffect, useState,  } from 'react'
import { MapContainer, TileLayer, MapContainerProps} from "react-leaflet";
import LocationMaker from './LocationMarker';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setLocation } from '../redux/locationSlice';
import { Location } from '../common/types';
import "./Map.css"
import PostBtn from './PostBtn';
// import { User } from '../redux/types';
import PostMaker from './PostMarker';
// import { MapProps } from './types';

const Map = (props) => {
  
  const { isPost } = props;
  // const locationState: Location = useAppSelector((state) => state.location);
  // const userState: User = useAppSelector((state) => state.user);
  const locationState = useAppSelector((state) => state.location);
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  // const [center, setCenter] = useState<>([0,0]);
  console.log("locationState",locationState);
  console.log("useState", useState);
  
  useEffect(() => { 
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lng = position.coords.longitude;
          const lat = position.coords.latitude
          if (lng !== locationState.lng || lat !== locationState.lat) {
            dispatch(setLocation({ lng: lng, lat: lat }));
          }
        },
        (error) => {
          console.error("Error getting user location: ", error);
          alert("we are not allowed to use your current location. So map will not be showen");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
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
                <MapContainer className='post-map_container' center={(locationState.lng && locationState.lat) ? [locationState.lng, locationState.lat] : [51.505, -0.09]} zoom={15}>
            {/* <MapContainer className='post-map_container' center={center} zoom={15}> */}
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
            {/* <MapContainer className='post-map_container' center={center} zoom={15}> */}
           <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              <LocationMaker />
              {/* user posts marker should be here */}
                    <PostMaker />
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