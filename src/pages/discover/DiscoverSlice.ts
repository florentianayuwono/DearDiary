import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { RootState, AppThunk } from "../../app/store";

export interface DiscoverState {
  url: string;
  token: string;
  username: string;
}

const initialState: DiscoverState = {
  url: "https://deardiary.onrender.com",
  token: "",
  username: "",
};

export const discoverSlice = createSlice({
  name: "discover",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // action = {type: "", payload: ---}
    authenticate: (state, action) => {
      switch (action.payload.type) {
        case "signup":
          fetch(state.url + "/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload.payload),
          })
            .then((response) => response.json())
            .then((user) => {
              console.log(user);
              localStorage.setItem(
                "auth",
                JSON.stringify({ token: user.token, username: user.username })
              );
              return {
                ...state,
                token: user.token,
                user: user.user,
              };
            });
          break;
        case "login":
          fetch(state.url + "/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload.payload),
          })
            .then((response) => response.json())
            .then((user) => {
              console.log(user);
              localStorage.setItem(
                "auth",
                JSON.stringify({ token: user.token, username: user.username })
              );
              return {
                ...state,
                token: user.token,
                user: user.user,
              };
            });
          break;
        default:
          return state;
      }
    },
  },
});

export const { authenticate } = discoverSlice.actions;
export default discoverSlice.reducer;
