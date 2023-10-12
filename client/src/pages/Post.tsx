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
import { locationUploader, postUploader } from '../api/postService';

function Post() {
  const locationState: Location = useAppSelector((state) => state.location);
  const userState: User = useAppSelector((state) => state.user);

  const [image, setImage] = useState<File | null>(null);
  const [tags, setTags] = useState<number[]>([]);
  const [ratingValue, setRating] = useState<number>(3);
  const [toiletFee, setToiletFee] = useState<string>("Free");
  const [comment, setComment] = useState("");

  const handlePost = async(e:any) => { 
    e.preventDefault();
    const isValidatedInput = validateInputs(image, tags, ratingValue, toiletFee, comment);

    if (!isValidatedInput) {
      alert("Please fill out or choose all of the items");
      return;
    } else if (!image) {
      alert("Please select an image");
      return; 
    }
    
    // upload image
    const userImgUrl: string | undefined = await imageUploader(image);
    
    if (!userImgUrl) {
      alert("your image can not be uploaded");
      return;

    } else {
      // everything is fine
      try {
        // upload user location and user posts
        const uploadedLocation = await locationUploader({ longitude: locationState.lng, latitude: locationState.lat });
          // submit post
        const userPost = {
            comment: comment,
            user_id: userState.uid,
            cost: toiletFee,
            facilities: tags,
            location_id: uploadedLocation.location_id,
            image_url: userImgUrl,
            rating: ratingValue
          }
        const response = await postUploader(userPost);
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