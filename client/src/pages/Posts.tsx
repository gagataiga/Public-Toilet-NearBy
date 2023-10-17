import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { getUserPostById } from '../api/postService'

const Posts = () => {
  const [userPosts, setUserPosts] = useState([]);

  const userState = useAppSelector(state => state.user);

  const fetchPosts =async () => {
    if (!userState.uid) {
      setUserPosts([]);
    } else {
      const response = await getUserPostById(userState.uid);
      console.log(response);
      
      setUserPosts(response);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  

  return (
    <div>Posts</div>
  )
}

export default Posts