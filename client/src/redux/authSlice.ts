import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { initialState } from "./state";
import { Dispatch } from "redux";
import { User } from "./types";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase.conf";
import { register } from "../api/userService";
import { UserInfo } from "../common/types";

export const signIn = (email: string, password: string) => { 
  return async (dispatch: Dispatch) => { 
    try {
      const loggedIn = await signInWithEmailAndPassword(auth, email, password);
      // call user info api from backend
      dispatch(setUserAuth({
        uid: 0,//仮
        name: "after",
        email: email,
        isLoggedIn: true
      }));

    } catch (error) {
      console.error(error);
      alert("user login is not suceedd")
    }
  }
}

export const signUp = (email:string, password:string, userName:string) => { 
  return async (dispatch: Dispatch) => { 
    try {

      const newUser = await createUserWithEmailAndPassword(auth, email, password);
      
      const user:UserInfo = {
        fb_uid: newUser.user.uid,
        email: email,
        password: password,
        username: userName
      }

      const uid:number = await register(user);

      dispatch(setUserAuth({
        uid: uid,
        name: userName,
        email: email,
        isLoggedIn: true
      }));
    } catch (error) {
      console.error(error);
      alert("user login error")
    }
    
  }
}

export const watchAuthState = () => async (dispatch:Dispatch) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // ユーザーがログインしている場合、認証されたユーザーオブジェクトをRedux stateにセット
      // apiから返されたものをここで取得
      // dispatch(setUser(user)); 
    } else {
      // ユーザーがログアウトしている場合、初期状態に設定して認証状態をクリア
      // dispatch(clearUser({
        
      // })); 
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
      return {
        ...state,
        ...action.payload
      }
    },
    clearUser: (state, action: PayloadAction<User>) => { 
      // everything should be clear
      return {
        uid: 0,
        name: "",
        email: "",
        isLoggedIn: false,
      }
    }
  },
  extraReducers: (builder) => { 
    
  }
});

export const { setUserAuth } = authSlice.actions;

export default authSlice.reducer;



