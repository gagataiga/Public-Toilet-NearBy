import React from 'react'
import { Rating, Stack } from '@mui/material'

const Ratings = () => {
  return (
    <div>
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
     </Stack>
    </div>
  )
}

export default Ratings