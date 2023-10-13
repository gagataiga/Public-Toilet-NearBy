import axios from 'axios';
import { UserInfo } from '../common/types';
const apiUrl: string = process.env.REACT_APP_API_URL || "";

export const getUserInfo = async(fb_uid: string) => { 
  try {
    const response = await axios.get(`${apiUrl}users/auth/${fb_uid}`);
    return response.data;
    }catch (error){
      console.error(error);
    }
}

export const register = async (user: UserInfo) => {
  try {
    // response => {user_id:number}
      const response = await axios.post(`${apiUrl}users/auth`, user);
      return response.data.user_id;
    } catch (error) {
      console.error(error);
    }
}