import axios from 'axios';
const apiUrl: string = process.env.REACT_APP_API_URL || "";

export const getUsersReview = async (postId: number) => { 
  try {
    const response = await axios.get(`${apiUrl}reviews/${postId}`)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}