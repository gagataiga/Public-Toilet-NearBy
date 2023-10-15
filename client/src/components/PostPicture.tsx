import React, { useState } from 'react'
import { PostPictureProps } from './types';
import "./PostPicture.css";
import { Button } from '@mui/material';


const PostPicture = ({image,setImage}:PostPictureProps) => {

  const [imageURL, setImageURL] = useState<string
  >("");

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("choopse file");
    
    const file = e.target.files;
    if (file && file[0]) {
      const objecUrl = URL.createObjectURL(file[0]);
      setImage(file[0]);// setimagefile
      setImageURL(objecUrl);
    }
  };

  return (
      <fieldset className='post-img_container'>
      <legend>Toilet Image post</legend>
      <Button
      component="label"
      >
      Image Upload
      <input type="file" name="image" id="image-upload" onChange={handleImageSelect} accept="image/*" hidden/>
      </Button>
      <div className="img-preview_container">
        {imageURL ? (<img src={imageURL} alt="Selected Image" className='pre-img'/>):("")}
      </div>
    </fieldset>
  )
}

export default PostPicture