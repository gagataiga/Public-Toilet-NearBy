import React, { useEffect, useState,  } from 'react'
import { MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import LocationMaker from './LocationMarker';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setLocation } from '../redux/locationSlice';
import "./Map.css"
import PostBtn from './PostBtn';
import PostMaker from './PostMarker';
import { getAllPosts } from '../api/postService';
import FilterBox from './FilterBox';
import BackToLocationBtn from './BackToLocationBtn';

const Map = (props) => {
  
  const { isPost } = props;
  
  const locationState = useAppSelector((state) => state.location);
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [defaultUserLocation, setDefaultUserLocation] = useState({lat:undefined,lng:undefined});
  const [userPosts, setUserPosts] = useState([]);
  const [filteredPosts, setfilteredPosts] = useState([]);

  const fetchAllPosts = async () => { 
    const response = await getAllPosts();
    setUserPosts(response);
    setfilteredPosts(response)
  }

  useEffect(() => {
    // userposts
    fetchAllPosts();
  },[]);

  useEffect(() => {
    if ((!locationState.lat && !locationState.lng) && (!defaultUserLocation.lat && !defaultUserLocation.lng)) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // get user current lng
            const lng = position.coords.longitude;
            // get user current lat
            const lat = position.coords.latitude;
            setDefaultUserLocation({ lng: lng, lat: lat });
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
      // set user current location again for map
    } else if ((locationState.lat && locationState.lng) && (!defaultUserLocation.lat && !defaultUserLocation.lng)) {
      setDefaultUserLocation({ lng: locationState.lng, lat: locationState.lat });
    }
}, []); 
  
useEffect(() => {
  // watch users location
  let watchId;
  if(navigator.geolocation) {
    if (!isPost) {
    watchId = navigator.geolocation.watchPosition(
        (position) => {
          const lng = position.coords.longitude;
          const lat = position.coords.latitude;
          console.log("user current location is being watched");
          dispatch(setLocation({ lng: lng, lat: lat }));
        },
      (error) => {
        console.error("Error getting user location: ", error);
      }
    );
  }
    // unwatch
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
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
                <MapContainer className='post-map_container' center={(locationState.lng && locationState.lat) ? { lng: locationState.lng, lat: locationState.lat } : [51.505, -0.09]} zoom={15} >
              <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
                <LocationMaker />
                <BackToLocationBtn/>
              </MapContainer>
          </div>
          )}
      </>
      ) : (
    // this map down below for home 
    <>
      {(defaultUserLocation.lng === undefined) ? (
        <div className='map_container skeleton-loader'></div>
      ):
        (
          <>
            <FilterBox posts={userPosts} setSelectedPosts={setfilteredPosts} />
            <MapContainer className='map_container' center={{ lng: defaultUserLocation.lng, lat: defaultUserLocation.lat} || [51.505, -0.09]} zoom={15}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            <LocationMaker />
            {/* user posts marker should be here */}
            <PostMaker posts={filteredPosts} />
            <BackToLocationBtn/>
            </MapContainer>
         {userState.isLoggedIn && (<PostBtn/>)}
                </>
        )
      }
    </>
    )}
    </>
  )
}

export default Map