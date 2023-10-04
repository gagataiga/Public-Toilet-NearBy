import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "./authSlice";
import locationReducer from "./locationSlice";

const reducer = {
  user: authReducer,
  location: locationReducer
}

console.log(reducer);

export const store = configureStore({
  reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

