import React from 'react'
import "./PostBtn.css";
import { Link } from 'react-router-dom';

const PostBtn = () => {
  return (
    <div className='post-btn_wrapper'>
      <Link to="/post">
        <button id="post-btn" >Post</button>
      </Link>
    </div>
  )
}

export default PostBtn