import React from 'react'
import { TextField } from '@mui/material'
import { CommentProps } from './types'

const Comment = ({ comment, setComment }: CommentProps) => {
  
  const handleComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value)
  };

  return (
    <div>
      <fieldset>
        <legend>Comment</legend>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          value={comment}
          onChange={handleComment}
        />
      </fieldset>
    </div>
  )
}

export default Comment