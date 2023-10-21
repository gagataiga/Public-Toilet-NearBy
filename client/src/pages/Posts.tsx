import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { getUserPostById } from '../api/postService'
import UserPost from '../components/UserPost'
import "./Posts.css";

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
    <div className='own-posts_container'>
    <h3 className='post-title'>Your Posts</h3>
    <div className='own-posts'>
        {userPosts.map((post, index) => { 
        return (
          <div className='own-post' key={index}>
            <UserPost post={post} isPostsPage={true} />
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Posts