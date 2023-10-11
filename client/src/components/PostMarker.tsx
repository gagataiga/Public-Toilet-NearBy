import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api/postService';
import { Marker, Polyline, Popup } from "react-leaflet";
import { getNavigation } from '../api/locationService';
import { useAppSelector } from '../redux/hooks';
import { Location } from '../common/types';
import { Button } from '@mui/material';

const PostMaker = () => {
  const [posts, setPosts] = useState([]);
  const [destination, setDestination] = useState<number[]>([]);
  const locationState: Location = useAppSelector((state) => state.location);
  const [routes, setRoutes] = useState<[][]>([]);

  const fetchAllPosts = async () => { 
    const response = await getAllPosts();
    setPosts(response);
  }
  
  const handleClick = async (lat:number, lng:number) => { 
    const start: string = `${locationState.lng},${locationState.lat}`;
    const end:string = `${lng},${lat}`;
    const result = await getNavigation(start, end);
    console.log(result);
    const routesArray = result.features[0].geometry.coordinates;
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
                    
                    <Button onClick={() => handleClick(post.latitude, post.longitude)}>Do you want to go there ?</Button>
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