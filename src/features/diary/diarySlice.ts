import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState, AppThunk } from "../../app/store";

export interface DiaryState {
  notes: string | null;
}

const initialState: DiaryState = {
  notes: null
};

export const diarySlice = createSlice({
  name: "diary",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // action = {type: "", payload: ---}
     getDiary: (state, action) => {
        state.notes = action.payload;
        console.log(state.notes)
     }

    // },
    // diary: (state, action) => {
    //   let newState;
    //   switch (action.payload.type) {
    //     case "readDiary":
    //       fetch(state.url + "/notes/", {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(action.payload.payload),
    //       })
    //         .then((response) => response.json())
    //         .then((user) => {
    //           console.log(user);
    //           if (!user.error) {
    //             localStorage.setItem(
    //               "auth",
    //               JSON.stringify({ token: user.token, username: user.username })
    //             );
    //           } else {
    //             localStorage.setItem("auth", JSON.stringify(null));
    //           }
    //           window.location.reload();
    //           return {
    //             ...state,
    //             token: user.token,
    //             user: user.user,
    //           };
    //         });
    //       break;
    //     case "login":
    //       fetch(state.url + "/login", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(action.payload.payload),
    //       })
    //         .then((response) => response.json())
    //         .then((user) => {
    //           console.log(user);
    //           if (!user.error) {
    //             localStorage.setItem(
    //               "auth",
    //               JSON.stringify({ token: user.token, username: user.username })
    //             );
    //           } else {
    //             localStorage.setItem("auth", JSON.stringify(null));
    //           }
    //           window.location.reload();
    //           return {
    //             ...state,
    //             token: user.token,
    //             user: user.user,
    //           };
    //         });
    //       break;
    //     case "logout":
    //       newState = {
    //         ...state,
    //         token: null,
    //         username: null,
    //       };
    //       localStorage.removeItem("auth");
    //       return newState;
    //       break;
    //     default:
    //       return state;
    //   }
    // },
  },
});

export const { getDiary } = diarySlice.actions;
export default diarySlice.reducer;
