import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { initialState } from "./state";
import { Dispatch } from "redux";
import { User } from "./types";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase.conf";

export const signIn = (email: string, password: string) => { 
  console.log(email,password);
  return async (dispatch: Dispatch) => { 
    try {
      console.log("これからサインインを試みます");
      const loggedIn = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUserAuth({
        uid: loggedIn.user.uid,
        name: "hoge",
        email: email,
        isLogined: true
      }));
    } catch (error) {
      console.log(error);
      alert("user login is not suceedd")
    }
  }
}

export const watchAuthState = () => async (dispatch:Dispatch) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // dispatch(setUser(user)); // ユーザーがログインしている場合、認証されたユーザーオブジェクトをRedux stateにセット
    } else {
      // dispatch(clearUser()); // ユーザーがログアウトしている場合、初期状態に設定して認証状態をクリア
    }
  });
  return unsubscribe;
};

export const signUp = (email:string, password:string) => { 

}

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
        uid: "",
        name: "",
        email: "",
        isLogined: false,
      }
    }
  },
  extraReducers: (builder) => { 
    
  }
});

export const { setUserAuth } = authSlice.actions;

export default authSlice.reducer;



