import axios from 'axios';
import { UserInfo } from '../common/types';
const apiUrl: string = process.env.REACT_APP_API_URL || "";

export const getUserInfo = async(fb_uid: string) => { 
  try {
    const response = await axios.get(`${apiUrl}/users/auth` + fb_uid);
  
    }catch (error){
      console.error(error);
    }
}

export const saveUserInfo = async (user: UserInfo) => {
    console.log(user);
    try {
      const response = await axios.post(`${apiUrl}users/auth`, user);
      return response;
    } catch (error) {
      console.error(error);
    }
}