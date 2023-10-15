import React from 'react'
import { Rating, Stack,Typography } from '@mui/material'
import { RatingProps } from './types'
import "./Ratings.css";
const
  Ratings = ({ ratingValue, setRating }: RatingProps) => {
  
  const handleRatingChange = (event: React.SyntheticEvent<Element, Event>, newValue: number | null) => {
    if (newValue !== null) {
      setRating(newValue);
    }
  };

  return (
    <div>
      <fieldset className='rating_conrainer'>
      <legend>Rating</legend>
        <Typography component="legend">Choose your rating</Typography>
        
          <Stack spacing={1}>
            <Rating name="rating" value={ratingValue} precision={1} onChange={handleRatingChange}/>
          </Stack>
      </fieldset>
    </div>
  )
}

export default Ratings