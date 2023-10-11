import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api/postService';
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

const PostMaker = () => {
  const [posts, setPosts] = useState([]);
  
  const fetchAllPosts = async () => { 
    const response = await getAllPosts();
    setPosts(response);
  }

 
  const handleClick = async () => { 
    console.log("L",);
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);

  console.log("posts", posts);

  return (
    <div>
      {posts.map((post:any, index) => { 
        return (
        <Marker key={index} position={{lng:post.longitude, lat:post.latitude}} >
          <Popup>
              <button onClick={handleClick}>Do you wanna go there ?</button>
          </Popup>
        </Marker>
        );
      })
      }
    </div>
  )
}

export default PostMaker