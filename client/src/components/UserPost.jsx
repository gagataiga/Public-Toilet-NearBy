import "./UserPost.css";
import React, { useState } from 'react'
import { Rating, Stack } from "@mui/material";
import { facilities as tags} from "../common/data/facilitiesTags";
import ReviewsModal from "./ReviewsModal";

const UserPost = (props) => {
  const { comment, cost, facilities, image_url, post_id, rating, user_id } = props.post;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="user-toilet-post_container">
      <fieldset className="post_content">
        <legend className="title">Toilet Total Rating</legend>  
      <div className="rating_container">
      <div className="rating">
        <Stack spacing={1}>
            <Rating name="rating" value={Number(rating)} precision={1} readOnly className="rating"/>
        </Stack>
        </div>
      </div>
      </fieldset>

      <fieldset className="post_content">
        <legend className="title">Toilet Image</legend>
        <div className="img_container">
          <img className="img" src={image_url} alt="" />
        </div>
      </fieldset>

      <fieldset className="post_content">
        <legend className="title">Cost</legend>
         <div className="cost">
          <p>{cost}</p>
         </div>
      </fieldset>

      <fieldset className="post_content">
        <legend className="title">Facilities</legend>
      <div className="facilities_container">
        {facilities.map((facilityNum, index)=>{ 
          return <div key={index} className="facility_img">
            {/* <button className="facility_btn">{tags[facilityNum]}</button> */}
            <p>{tags[facilityNum]}</p>
            <img src={"../" + tags[facilityNum] + ".png"} alt={tags[facilityNum]} />
          </div>
        })}
      </div>
      </fieldset>

      <fieldset className="post_content">
        <legend className="title">Comment</legend>
        <div className="comment_container">
          <textarea className="comment_txt" readOnly name="comment" id="" cols="30" rows="10" defaultValue={comment}>
        </textarea >
      </div>
      </fieldset>

      <div>
        <button className='review-btn' onClick={handleOpen}>Would you like to see Reviews?</button>
         {/* this is for reviews */}
         {open && <ReviewsModal open={open} setOpen={setOpen} postId={post_id} /> }
      </div>
    </div>
  )
}

export default UserPost