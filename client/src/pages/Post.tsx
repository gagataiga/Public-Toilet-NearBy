import React, { useEffect, useState } from 'react'
import "./Post.css"
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { Location } from '../common/types';
import { User } from "../redux/types";
import Map from '../components/Map';
import PostPicture from '../components/PostPicture';
import Ratings from '../components/Ratings';
import { Button } from '@mui/material';
import Comment from '../components/Comment';
import Tags from '../components/Tags';
import Cost from '../components/Cost';
import { imageUploader } from '../api/postService';
import { validateInputs } from "../utils/util";
import { postLocation } from '../api/postService';

function Post() {
  const locationState: Location = useAppSelector((state) => state.location);
  const userState: User = useAppSelector((state) => state.user);

  const [image, setImage] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [ratingValue, setRating] = useState<number>(3);
  const [toiletFee, setToiletFee] = useState<string>("Free");
  const [comment, setComment] = useState("");

  const handlePost = async(e:any) => { 
    e.preventDefault();
    const isValidatedInput = validateInputs(image, tags, ratingValue, toiletFee, comment);

    if (!isValidatedInput) {
      alert("全て入力してください");
      return;
    }

    if (image) {
      const userImgUrl = await imageUploader(image);
      console.log(userImgUrl);
      try {
        // upload user location and user posts
        const locationId = await postLocation({ longitude: locationState.lng, latitude: locationState.lat });
        
        if (locationId === 0) {
          alert("Your location was not found");
          return;
        }

        try {
          // submit posts
        } catch (error) {
          
        }
        // 
      } catch(error) { 
        console.error(error);
      }
    }
   
  } 

  return (
    <div className='post'>
      <form action="post" className='post_form'>
      <p className='post_item_message'>Thank you for your volunteerism</p>
        {/* this map down below should be for post */}
        <fieldset>
          <legend>Choose Toilet location</legend>
        <Map isPost={true}/>
        </fieldset>
        <PostPicture image={image} setImage={setImage}/>
        <Ratings ratingValue={ratingValue} setRating={setRating}/>
        <Cost toiletFee={toiletFee} setToiletFee={setToiletFee} />
        <Tags tags={tags} setTags={setTags}/>
        <Comment comment={comment} setComment={setComment} />
        <Button variant="contained"
          type="submit"
          onClick={handlePost}>Submit
        </Button>
      </form>
    </div>

  )
}

export default Post