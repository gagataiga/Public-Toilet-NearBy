import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { locationState,initialState } from "./state";
import { Location } from "../common/types";

export const locationSlice = createSlice({
  name: "location",
  initialState:locationState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location>) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;

