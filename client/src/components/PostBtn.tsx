import React from 'react'
import "./PostBtn.css";
import { Link } from 'react-router-dom';
import toiletPost from '../img/toilet_post.png';

const PostBtn = () => {
  return (
    <div className='post-btn_wrapper'>
      <Link to="/post">
        <button id="post-btn" >
          <img id="post-img" src={toiletPost} alt="toilet_post" />
        </button>
      </Link>
    </div>
  )
}

export default PostBtn