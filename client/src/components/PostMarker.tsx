import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api/postService';
import { Marker, Polyline, Popup } from "react-leaflet";
import { getNavigation } from '../api/locationService';
import { useAppSelector } from '../redux/hooks';
import { Location } from '../common/types';
import { Button } from '@mui/material';
import { checkDistance } from '../utils/util';

const PostMaker = () => {
  const [posts, setPosts] = useState([]);
  const [destination, setDestination] = useState<number[]>([]);
  const locationState: Location = useAppSelector((state) => state.location);
  const [routes, setRoutes] = useState<[][]>([]);
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [steps, setSteps] = useState([]);


  const fetchAllPosts = async () => { 
    const response = await getAllPosts();
    setPosts(response);
  }
  
  const handleClick = async (lat: number, lng: number) => { 
    // user location
    const start: string = `${locationState.lng},${locationState.lat}`;
    //destination
    const end: string = `${lng},${lat}`;
    const result = await getNavigation(start, end);

    const routesArray = result.features[0].geometry.coordinates;
    const dis = result.features[0].properties.segments[0].distance;
    const dur = result.features[0].properties.segments[0].duration;
    const navSteps = result.features[0].properties.segments[0].steps;

     const distance = checkDistance({ lat: locationState.lat, lng: locationState.lng}, { lat: lat, lng: lng })

    console.log(distance);
    
    setDuration(dur);
    setDistance(dis); 
    setSteps(navSteps);

    console.log(routesArray);
    const reversedRoutes = routesArray.map((route:any) => [route[1],route[0]]);
    console.log(reversedRoutes);
    
    setRoutes(reversedRoutes);
    setDestination([lng, lat]);
  }

  
  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div>
      {destination.length > 0 ? (<>
        <Marker  position={{ lng: destination[0], lat: destination[1] }} >
            <Popup>
              your destination
          </Popup>
        </Marker>
        <Polyline positions={routes} color="blue" />
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