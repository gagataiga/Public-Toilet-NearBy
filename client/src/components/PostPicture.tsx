import React, { useState } from 'react'
import { PostPictureProps } from './types';

const PostPicture = ({image,setImage}:PostPictureProps) => {

  const [imageURL, setImageURL] = useState<string
  >("");

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("choopse file");
    
    const file = e.target.files;
    if (file && file[0]) {
      console.log(file[0]);
      const objecUrl = URL.createObjectURL(file[0]);
      setImage(file[0]);// setimagefile
      console.log("image", image);
      console.log(objecUrl);
      setImageURL(objecUrl);
    }
  };

  return (
    <div className='post-img_container'>
      <fieldset>
      <legend>Toilet Image post</legend>
      PostPicture
      <input type="file" name="image" id="image-upload" onChange={handleImageSelect} accept="image/*"/>
      <div className="img-preview">
        {imageURL ? (<img src={imageURL} alt="Selected Image" />):(<div>ここにimageが表示されるよ</div>)}
        </div>
        <input type="file" />
      </fieldset>
    </div>
  )
}

export default PostPicture