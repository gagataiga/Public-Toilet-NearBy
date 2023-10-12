import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api/postService';
import { Marker, Polyline, Popup } from "react-leaflet";
import { getNavigation } from '../api/locationService';
import { useAppSelector } from '../redux/hooks';
import { Location } from '../common/types';
import { Button } from '@mui/material';
import Navigator from './Navigator';
import { NavStep} from './types';
import { LatLngExpression } from 'leaflet';

const PostMaker = () => {
  // props
  const [routes, setRoutes] = useState([]);
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [steps, setSteps] = useState<NavStep[]>([]);
  const [posts, setPosts] = useState([]);
  const [destination, setDestination] = useState<number[]>([]);
  const locationState: Location = useAppSelector((state) => state.location);
  // const convertedRoutes: LatLngExpression[] = routes.map((route):LatLngExpression => [route[0],route[1]]);

  const fetchAllPosts = async () => { 
    const response = await getAllPosts();
    setPosts(response);
  }
  
  const handleClick = async (lat: number, lng: number) => { 
    // user location
    const start: string = `${locationState.lng},${locationState.lat}`;
    // destination
    const end: string = `${lng},${lat}`;
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
    const reversedRoutes = routesArray.map((route:any) => [route[1],route[0]]);    
    setRoutes(reversedRoutes);
    setDestination([lng, lat]);
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div>
      {routes.length > 0 ? (<>
        <Marker  position={{ lng: destination[0], lat: destination[1] }} >
            <Popup>
              your destination
          </Popup>
        </Marker>
        <Polyline positions={routes} color="red" />
        <Navigator distance={distance} duration={duration} steps={steps} routes={routes} setRoutes={setRoutes} setSteps={setSteps}/>
      </>) : (
      <>
            {posts.map((post: any, index) => {
              return (
                <Marker key={index} position={{ lng: post.longitude, lat: post.latitude }} >
                  <Popup>
                    <Button variant="contained" onClick={() => handleClick(post.latitude, post.longitude)}>Do you want to go there ?</Button>
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