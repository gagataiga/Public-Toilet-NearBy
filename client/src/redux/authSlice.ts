import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { Dispatch } from "redux";
import { User } from "./types";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,} from "firebase/auth";
import { auth } from "../firebase.conf";
import { register } from "../api/userService";
import { UserInfo } from "../common/types";

// actions
export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUserAuth: (state, action:PayloadAction<User>) =>{
      return {
        ...state,
          uid: action.payload.uid,
          fb_uid: action.payload.fb_uid,
          name: action.payload.name,
          email: action.payload.email,
          isLoggedIn: true
      }
    },
    clearUser: (state) => { 
      // everything should be clear
      return {
        ...state,
          uid: 0,
          fb_uid: "",
          name: "",
          email: "",
          isLoggedIn: false,
      }
    }
  }
});


export const signIn = (email: string, password: string) => { 
  return async (dispatch: Dispatch) => { 
    try {
      // user exists
      const loggedIn = await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.error(error);
      alert("user is not exist");
    }
  }
}

export const signUp = (email: string, password: string, userName: string) => { 
  return async (dispatch: Dispatch) => { 
    try {
      // register in firebase
      const newUser = await createUserWithEmailAndPassword(auth, email, password);

      const user: UserInfo = {
          username: userName,
          email: email,
          password: password,
          fb_uid: newUser.user.uid,
      }

      // register new user in backend
      const uid:number = await register(user);
      dispatch(setUserAuth({
          uid: uid,
          fb_uid: newUser.user.uid,
          name: userName,
          email: email,
          isLoggedIn: true
        }
      ));
      return true;

    } catch (error) {
      console.error(error);
      alert("user sign up error")
    }
    
  }
}

export const signOut = () => { 

}


export const { setUserAuth } = authSlice.actions;

export default authSlice.reducer;



