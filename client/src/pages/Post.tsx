import React, { useEffect, useState } from 'react'
import "./Post.css"
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { Location } from '../common/types';
import { User } from "../redux/types";
import Map from '../components/Map';
import PostPicture from '../components/PostPicture';
import Rating from '../components/Ratings';

function Post() {
  const locationState: Location = useAppSelector((state) => state.location);
  const userState: User = useAppSelector((state) => state.user);
  const [image, setImage] = useState("");

  return (
    <div className='post'>
      <form action="post" className='post_form'>
      <p className='post_item_message'>Thank you for your volunteerism</p>
      {/* this map down below should be for post */}
      <Map isPost={true}/>
      <p className='post_item_message'>Choose the place where you would like to post</p>
        <PostPicture />
        <button>post</button>
      </form>
    </div>

  )
}

export default Post