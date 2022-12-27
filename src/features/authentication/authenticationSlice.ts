import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { RootState, AppThunk } from "../../app/store";

export interface AuthenticationState {
  url: string;
  token: string | null;
  username: string | null;
  loggedIn: boolean;
}

const initialState: AuthenticationState = {
  url: "https://deardiary.onrender.com",
  token: null,
  username: null,
  loggedIn: false,
};

export const authenticationSlice = createSlice({
  name: "authenticate",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // action = {type: "", payload: ---}
    authenticate: (state, action) => {
      let newState;
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
              if (!user.error) {
                localStorage.setItem(
                  "auth",
                  JSON.stringify({ token: user.token, username: user.username })
                );
                state.loggedIn = true;
              }

              return {
                ...state,
                token: user.token,
                username: user.user.username
              };
            });
          break;
        case "login":
          console.log(action.payload);
          fetch(state.url + "/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload.payload),
          })
            .then((response) => response.json())
            .then((user) => {
              if (!user.error) {
                localStorage.setItem(
                  "auth",
                  JSON.stringify({ token: user.token, username: user.username })
                );
                state.loggedIn = true;
              }
              return {
                ...state,
                token: user.token,
                username: user.user.username
              };
            });
          break;
        case "logout":
          console.log(state);
          newState = {
            ...state,
            token: null,
            username: null,
          };
          localStorage.removeItem("auth");
          return newState;
          break;
        default:
          return state;
      }
    },
  },
});

export const { authenticate } = authenticationSlice.actions;
export default authenticationSlice.reducer;
