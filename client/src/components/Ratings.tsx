import React from 'react'
import { Rating, Stack,Typography } from '@mui/material'
import { RatingProps } from './types'

const Ratings = ({ ratingValue, setRating }: RatingProps) => {
  
  const handleRatingChange = (event: React.SyntheticEvent<Element, Event>, newValue: number | null) => {
    console.log("選択",newValue);
    console.log("現在の",ratingValue);
    if (newValue !== null) {
      setRating(newValue);
    }
  };

  return (
    <div>
      <fieldset>
      <legend>Rating</legend>
        <Typography component="legend">Controlled</Typography>
          <Stack spacing={1}>
            <Rating name="rating" value={ratingValue} precision={1} onChange={handleRatingChange}/>
          </Stack>
      </fieldset>
    </div>
  )
}

export default Ratings