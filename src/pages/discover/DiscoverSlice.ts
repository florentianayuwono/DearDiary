import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface DiscoverState {
  url: string;
}

const initialState: DiscoverState = {
  url: "https://deardiary.onrender.com",
};

export const discoverSlice = createSlice({
  name: "discover",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // action = {type: "", payload: ---}
    discoverReducer: (state, action) => {
      switch (action.type) {
        default:
          return state;
      }
    },
  },
});

export const { discoverReducer } = discoverSlice.actions;
export default discoverSlice.reducer;
