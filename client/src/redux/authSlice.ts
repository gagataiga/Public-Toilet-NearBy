import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { Dispatch } from "redux";
import { User } from "./types";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase.conf";
import { getUserInfo, register } from "../api/userService";
import { UserInfo } from "../common/types";

export const signIn = (email: string, password: string) => { 
  return async (dispatch: Dispatch) => { 
    try {
      const loggedIn = await signInWithEmailAndPassword(auth, email, password);
      // user exists
      const userData = await getUserInfo(loggedIn.user.uid);
      // call user info api from backend
      dispatch(setUserAuth({
        uid: userData.user_id,
        name: userData.username,
        email: userData.email,
        isLoggedIn: true
      }));

    } catch (error) {
      console.error(error);
      alert("user is not exist");
    }
  }
}

export const signUp = (email:string, password:string, userName:string) => { 
  return async (dispatch: Dispatch) => { 
    try {
      // register in firebase
      const newUser = await createUserWithEmailAndPassword(auth, email, password);

      const user:UserInfo = {
        fb_uid: newUser.user.uid,
        email: email,
        password: password,
        username: userName
      }

      // register new user in backend
      const uid:number = await register(user);
      
      dispatch(setUserAuth({
        uid: uid,
        name: userName,
        email: email,
        isLoggedIn: true
      }));

    } catch (error) {
      console.error(error);
      alert("user sign up error")
    }
    
  }
}

export const watchAuthState = () => async (dispatch: Dispatch) => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      const {user_id,username,email} = await getUserInfo(user.uid);
      dispatch(setUserAuth({
        uid: user_id,
        name: username,
        email: email,
        isLoggedIn: true
      }));
    }
  });
  return unsubscribe;
};


export const signOut = () => { 

}

// actions
export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUserAuth: (state, action:PayloadAction<User>) =>{
      console.log(action.payload);
      return {
        ...state,
        user: {
          uid: action.payload.uid,
          name: action.payload.name,
          email: action.payload.email,
          isLoggedIn: true
        }
      }
    },
    clearUser: (state, action: PayloadAction<User>) => { 
      // everything should be clear
      return {
        user: {
          uid: 0,
          name: "",
          email: "",
          isLoggedIn: false,
        }
      }
    }
  }
});

export const { setUserAuth } = authSlice.actions;

export default authSlice.reducer;



