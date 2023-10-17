import React, { useEffect, useState } from 'react'
import { getUsersReview } from '../api/reviewsService';
import "./ReviewsModal.css";
import { Box, Modal , Rating, Button} from '@mui/material';
import { dateFomatChange } from '../utils/util';
import { postReview } from '../api/reviewsService';
import { useAppSelector } from '../redux/hooks';

const ReviewsModal = (props) => {
  const { open, setOpen, postId , isPostPage} = props;
  const [reviews, setReviews] = useState([]);
  const [isReviewing, setIsReviewing] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const userState = useAppSelector(state => state.user);

  const handleClose = () => { setOpen(false) }

  const fetchReviews = async () => { 
    const result = await getUsersReview(postId);
    setReviews(result);
  } 

  const handloeToggleReviewPost = () => { 
    setIsReviewing(!isReviewing);
  }

  const handleComment = (e) => {
    setComment(e.target.value)
  };

  const handleRating = (e, newValue) => {
    if (newValue !== null) {
      console.log(newValue);
      setRating(newValue)
    }
  };

  const handleReviewSubmit = async(e) => { 
    e.preventDefault();

    if (rating < 1 || comment === "") {
      alert("Please Ensure all fields are filled in or chosen")
    }

    try {
      const result = await postReview({ comment: comment, user_id: userState.uid, rating: rating, post_id: postId});
      alert(result);
      handleClose();
    } catch (error) {
      alert.error(error);
    }
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className='review-modal-box'>
          <h4>{isReviewing ? "Feel free to share! Thank you!":"This Toilet All reviews and ratings"}</h4>
          <div className='reviews_container'>
            {isReviewing ?
              (
              <>
                  <div className='review_container'>
                    <form action="">
                    <div className='review-content review-post'>
                        <Rating name="size-medium" defaultValue={0} value={Number(rating)} size="medium" onChange={handleRating}/>
                    </div>
                    <div className='review-content review-post'>
                        <textarea name="review" id="review-post-msg" cols="30" rows="5" placeholder='Here you can review' style={{resize:"none"}} onChange={handleComment}>
                        </textarea>
                    </div>
                    {isReviewing && <Button onClick={handleReviewSubmit} type='post'>Submit</Button>}
                    </form>
                  </div>
              </>
            )
              :
              (
                <div>
                {reviews.length < 1 ? (
                    <>
                    There is no reviews
                    </> 
                  ) : (
                      <>
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
                    </>
                )}
            </div>)}
          </div>
          {isPostPage ? (<></>) : (<> 
          {!userState.isLoggedIn ? (<Button onClick={handleClose}>Back</Button>) : (<Button onClick={handloeToggleReviewPost}>{isReviewing ? "Back" : "Let's review it"}</Button>)}
          </>)}
        </Box>
      </Modal>
    </div>
  )
}

export default ReviewsModal