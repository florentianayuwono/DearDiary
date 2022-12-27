import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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
    authenticate: async (state, action) => {
      let newState;
      let response;
      let user;
      switch (action.payload.type) {
        case "signup":
          console.log(action.payload);
          response = fetch(state.url + "/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload.payload),
          });
          user = await (await response).json();
          if (!user.error) {
            localStorage.setItem(
              "auth",
              JSON.stringify({ token: user.token, username: user.username })
            );
            state.loggedIn = true;
            state.token = user.token;
            state.username = user.user.username;
            console.log(state.token);
          }
          console.log(user.token);
          break;
          break;
        case "login":
          console.log(action.payload);
          response = fetch(state.url + "/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload.payload),
          });
          user = await (await response).json();
          if (!user.error) {
            localStorage.setItem(
              "auth",
              JSON.stringify({ token: user.token, username: user.username })
            );
            return {
              ...state,
              token: user.token,
              loggedIn: true,
              username: user.user.username,
            };
            //state = newState
            //return newState
            console.log(state.token);
          }
          console.log(user.token);
          break;
        case "logout":
          state.token = null;
          state.username = null;
          state.loggedIn = false;
          localStorage.removeItem("auth");
          return newState;
          break;
        default:
          return state;
      }
    },
  },
});
export const selectUsername = (state: RootState) =>
  state.authenticator.username;

export const { authenticate } = authenticationSlice.actions;
export default authenticationSlice.reducer;
