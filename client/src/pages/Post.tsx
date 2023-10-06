import React, { useEffect, useState } from 'react'
import "./Post.css"
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { Location } from '../common/types';
import { User } from "../redux/types";
import Map from '../components/Map';
import PostPicture from '../components/PostPicture';
import Ratings from '../components/Ratings';
import Tag from '../components/Tag';
import { Button } from '@mui/material';

function Post() {
  const locationState: Location = useAppSelector((state) => state.location);
  const userState: User = useAppSelector((state) => state.user);
  const [image, setImage] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const availableTags: string[] = ['MEN', 'WOMEN', 'handicap accessible','Kids']; 
  console.log(tags);
  
  const handleTagToggle = (tag: string): void => {
    if (tags.includes(tag)) {
      // タグが既に選択されていれば、選択状態を解除
      setTags(tags.filter((selectedTag) => selectedTag !== tag));
    } else {
      // タグが選択されていなければ、選択状態に追加
      setTags([...tags, tag]);
    }
  };

  const handlePost = (e:any) => { 
    e.preventDefault();
  }

  return (
    <div className='post'>
      <form action="post" className='post_form'>
      <p className='post_item_message'>Thank you for your volunteerism</p>
      {/* this map down below should be for post */}
      <Map isPost={true}/>
      <p className='post_item_message'>Choose the place where you would like to post</p>
      <PostPicture />
        <Ratings />
        {availableTags.map((tag) => (
        
        <Tag
          key={tag}
          label={tag}
          isSelected={tags.includes(tag)}
          onToggle={handleTagToggle}
        />
        ))}

        

        <Button variant="contained"
          type="submit"
          onClick={handlePost}>Submit
        </Button>
      </form>
    </div>

  )
}

export default Post