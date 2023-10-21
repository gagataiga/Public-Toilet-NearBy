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

  const postData = [
    {
      comment: "This is nice",
      cost: "Free",
      facilities: [0, 1],
      image_url: "https://firebasestorage.googleapis.com/v0/b/near-me-toilet.appspot.com/o/posts%2Fbathroom-5944194_640.jpg?alt=media&token=14dedddb-7742-4bd3-8278-cc68a84f8dc5",
      latitude: 36.042585,
      longitude: 139.712448,
      post_id: 2,
      rating: 5
    },
    {
      comment: "This is nice",
      cost: "Free",
      facilities: [0, 1],
      image_url: "https://firebasestorage.googleapis.com/v0/b/near-me-toilet.appspot.com/o/posts%2Fbathroom-5944194_640.jpg?alt=media&token=14dedddb-7742-4bd3-8278-cc68a84f8dc5",
      latitude: 36.042585,
      longitude: 139.712448,
      post_id: 2,
      rating: 5
    },
    {
      comment: "This is nice",
      cost: "Free",
      facilities: [0, 1],
      image_url: "https://firebasestorage.googleapis.com/v0/b/near-me-toilet.appspot.com/o/posts%2Fbathroom-5944194_640.jpg?alt=media&token=14dedddb-7742-4bd3-8278-cc68a84f8dc5",
      latitude: 36.042585,
      longitude: 139.712448,
      post_id: 2,
      rating: 5
    },
    {
      comment: "This is nice",
      cost: "Free",
      facilities: [0, 1],
      image_url: "https://firebasestorage.googleapis.com/v0/b/near-me-toilet.appspot.com/o/posts%2Fbathroom-5944194_640.jpg?alt=media&token=14dedddb-7742-4bd3-8278-cc68a84f8dc5",
      latitude: 36.042585,
      longitude: 139.712448,
      post_id: 2,
      rating: 5
    }
  ];
  
  return (
    <div className='own-posts_container'>
    <h3 className='post-title'>Your Posts</h3>
    <div className='own-posts'>
        {postData.map((post, index) => { 
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