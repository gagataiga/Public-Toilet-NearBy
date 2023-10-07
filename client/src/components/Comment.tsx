import React from 'react'
import { TextField } from '@mui/material'
import { CommentProps } from './types'

const Comment = ({ comment, setComment }: CommentProps) => {
  
  const handleComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    // コメントを送信するための処理をここに追加（例：APIリクエストを送信する、コメントを保存するなど）
    console.log('コメントが送信されました:', comment);
    setComment(event.target.value)
    console.log(comment);
    
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