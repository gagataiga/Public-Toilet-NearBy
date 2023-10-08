import axios from "axios";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { storage } from "../firebase.conf";
import { generateUniqueFileName } from "../utils/util";

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

export const postUploader = () => {
  console.log("post upload");
};