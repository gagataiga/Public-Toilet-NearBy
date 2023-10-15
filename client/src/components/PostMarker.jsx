import React, { useEffect, useState } from 'react'
import { Marker, Polyline, Popup } from "react-leaflet";
import { getNavigation } from '../api/locationService';
import { useAppSelector } from '../redux/hooks';
import { Button, Mordal} from '@mui/material';
import Navigator from './Navigator';
import UserPost from './UserPost';
import "./PostMarker.css";
import ReviewsModal from './ReviewsModal';
import L from "leaflet";

const PostMaker = (props) => {
  // props
  const { posts } = props;
  const [routes, setRoutes] = useState([]);
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [steps, setSteps] = useState([]);
  const [destination, setDestination] = useState([]);
  const locationState = useAppSelector((state) => state.location);
  const [post, setPostSelected] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleNavigateClick = async (lat, lng, post) => { 
    setPostSelected(post);
    // user location
    const start = `${locationState.lng},${locationState.lat}`;
    // destination
    const end = `${lng},${lat}`;
    const result = await getNavigation(start, end);
    const routesArray = result.features[0].geometry.coordinates;
    // the distance between user current location and the destination
    const dis = result.features[0].properties.segments[0].distance;
    // time it takes to get there
    const dur = result.features[0].properties.segments[0].duration;
    // navigation 
    const navSteps = result.features[0].properties.segments[0].steps;
    
    setDuration(dur);
    setDistance(dis); 
    setSteps(navSteps);
    // [ [lng,lat] ....] => [ [lat, lng] ..... ];
    const reversedRoutes = routesArray.map((route) => [route[1],route[0]]);    
    setRoutes(reversedRoutes);
    setDestination([lng, lat]);
  }

  const postsMarkerIcon = new L.Icon({
    iconUrl: require("../img/postMarker.png"),
    iconSize:[35,40],
  });

  return (
    <div>
      {routes.length > 0 ? (<>
        <Marker  position={{ lng: destination[0], lat: destination[1] }} >
            <Popup>
              your destination
          </Popup>
        </Marker>
        <Polyline positions={routes} color={"green"} />
        <Navigator distance={distance} duration={duration} steps={steps} routes={routes} setRoutes={setRoutes} setSteps={setSteps}/>
      </>) : (
      <>
            {posts.map((post, index) => {
              return (
                <Marker key={index} position={{ lng: post.longitude, lat: post.latitude }} icon={postsMarkerIcon} >
                  <Popup maxWidth={5000} maxHeight="auto" className='custom-popup-content'>
                    <UserPost post={post} />
                    <div>
                    <button className='review-btn' onClick={handleOpen}>Would you like to see Reviews?</button>
                    </div>
                    <div className='navigate-btn_container'>
                    <Button variant="contained" onClick={() => handleNavigateClick(post.latitude, post.longitude, post)}>Navigate</Button>
                    </div>
                   {/* this is for reviews */}
                    {open && <ReviewsModal open={open} setOpen={setOpen} postId={post.post_id} /> }
                  </Popup>
                  </Marker>
              );
            })}
      </>
      )}
    </div>
  )
}

export default PostMaker