import axios from "axios";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { storage } from "../firebase.conf";
import { generateUniqueFileName } from "../utils/util";
import { Location } from "../common/types";
import { UserPost } from "../common/types";

const apiUrl: string = process.env.REACT_APP_API_URL || "";

// upload image to firebase firestorage
export const imageUploader = async (selectedFile: File): Promise<string | undefined> => {
  if (selectedFile) {
    // image file should be radom num
    const randomId = generateUniqueFileName();
    const storageRef = ref(storage, `posts/${randomId}`);
    try {
      // upload image
      const uploadedSnapshot = await uploadBytesResumable(
        storageRef,
        selectedFile
      );

      // url to access to firebase storage
      const downLoadURL: string = await getDownloadURL(uploadedSnapshot.ref);
      console.log("upload is successed");
      return downLoadURL;
    } catch (error) {
      console.log(error);
      console.log("upload is not successed");
    }
  }

};

export const locationUploader = async (location:{longitude: number | undefined,latitude: number | undefined}) => { 
  
  if (!location.latitude || !location.longitude) {
    return 0;
  }

  try {
    const response = await axios.post(`/locations/`,location);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const postUploader = async(post:UserPost) => {
  try {
    const response = await axios.post(`/posts/`, post);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllPosts = async () => { 
  try {
    const response = await axios.get(`posts/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}