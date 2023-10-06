import React, { useState } from 'react'

const PostPicture = () => {
  const [imageURL, setImageURL] = useState<string
  >("");

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    console.log(file);

    if (file && file[0]) {
      console.log(file[0]);
      const objecUrl = URL.createObjectURL(file[0]);
      console.log(objecUrl);
      setImageURL(objecUrl);
    }
  };

  return (
    <div className='post-img_container'>
      PostPicture
      <input type="file" name="image" id="image-upload" onChange={handleImageSelect} accept="image/*"/>
      <div className="img-preview">
        {imageURL ? (<img src={imageURL} alt="Selected Image" />):(<div>ここにimageが表示されるよ</div>)}
     </div>
    </div>
  )
}

export default PostPicture