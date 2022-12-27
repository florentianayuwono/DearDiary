import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { store } from "../app/store";
import { Loader } from "../components";
import {  selectUsername } from "../features/authentication/authenticationSlice";
import { increment } from "../features/counter/counterSlice";
import { getDiary } from "../features/diary/diarySlice";

const Dashboard = async () => {
  const dispatch = useAppDispatch();

  const url = useAppSelector((state) => state.authenticator.url);
  let token = localStorage.getItem("auth");

  if (token) {
    token = JSON.parse(token).token;
  }
  const getNotes = async () => {
    const response = fetch(url + "/diaries/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const notes = await (await response).json();
    dispatch(getDiary(notes));
  };
  console.log("initial state", store.getState())

  useEffect(() => {
    getNotes();
  }, []);

//   const diaries = async () => {
//     const response = fetch(url + "/diaries/", {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });
//     const data = await (await response).json();
//     return data;
//   }

//   const userName = async () => {
//     const response = fetch(url + "/auto_login/", {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });
//     const user = await (await response).json();
//     return user.username;
//   }

//   const user = await userName()
//   const diary = await diaries()

  const currentState = store.getState()
  console.log(currentState.authenticator.username);

  const loaded = () => {
    <>
    <h1>Hi!</h1>
    </>
  };

  //console.log(user)
  //console.log(diary)

  return loaded();
//   diary ? loaded() : <Loader title="Just a moment...🦋" />;
};

export default Dashboard;
