import React, { useEffect, useState } from 'react'
import { getUsersReview } from '../api/reviewsService';
import "./ReviewsModal.css";
import { Box, Modal , Rating, Button} from '@mui/material';
import { dateFomatChange } from '../utils/util';

const ReviewsModal = (props) => {
  const { open, setOpen, postId } = props;
  const [reviews, setReviews] = useState([]);

  const handleClose = () => { setOpen(false) }
  
  const fetchReviews = async () => { 
    const result = await getUsersReview(postId);
    console.log("this is reviews", result);
    setReviews(result);
  } 
  const fakedata = [
    {
      "comment": "Clean and well-maintained restroom, highly recommended!",
      "created_at": "2023-10-15T14:46:04.706Z",
      "rating": 4,
      "username": "user1"
    },
    {
      "comment": "Nice restroom!",
      "created_at": "2023-10-15T14:46:04.706Z",
      "rating": 3,
      "username": "user2"
    },
    {
      "comment": "Basic facilities, nothing extraordinary",
      "created_at": "2023-10-15T14:46:04.706Z",
      "rating": 3,
      "username": "user3"
    },
    {
      "comment": "It is not cleaned",
      "created_at": "2023-10-15T14:46:04.706Z",
      "rating": 2,
      "username": "user4"
    },
    {
      "comment": "Simple and clean restroom, satisfied",
      "created_at": "2023-10-15T14:46:04.706Z",
      "rating": 5,
      "username": "user5"
    },
    {
      "comment": "Okay toilet, not too bad.",
      "created_at": "2023-10-15T14:46:04.706Z",
      "rating": 3,
      "username": "user6"
    }
  ];
  
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className='review-modal-box'>
          <h4>This Toilet All reviews and ratings</h4>
          <div className='reviews_container'>
            {reviews.map((review, index) => {
              const date = dateFomatChange(review.created_at);
              return (
                <div key={index} className='review_container'>
                  <div className='review-content'>
                  Date: {date}
                  </div>
                  <div className='review-content'>
                   Name: {review.username}
                  </div>
                  <div className='review-content'>
                  <Rating name="size-small" defaultValue={review.rating} size="small" readOnly/>
                  </div>
                  <div className='review-content'>
                    <textarea name="review" id="review" cols="30" rows="5" readOnly value={review.comment} style={{resize:"none"}}>
                    </textarea>
                  </div>
              </div>
              )
            })}
          </div>
          <Button>Let's review it</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default ReviewsModal