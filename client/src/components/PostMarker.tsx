import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api/postService';
import { Marker, Popup } from "react-leaflet";

const PostMaker = () => {

  const [posts, setPosts] = useState([]);
  
  const fetchAllPosts = async () => { 
    const response = await getAllPosts();
    setPosts(response);
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
          <div style={{height: "auto", width: "auto", fontSize:"30px",overflow:  "auto"}}>
          A pretty CSS3 popup. Easily customizable
          </div>
          </Popup>
        </Marker>
        );
      })
      }
    </div>
  )
}

export default PostMaker