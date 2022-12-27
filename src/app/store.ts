import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import playerReducer from '../features/musicPlayer/playerSlice';
import authenticationReducer from '../features/authentication/authenticationSlice';
import  discoverReducer  from '../pages/discover/DiscoverSlice';
import diaryReducer from '../features/diary/diarySlice'
import { shazamCoreApi } from "../services/shazamCore";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
    // discover: discoverReducer
    authenticator: authenticationReducer,
    diary: diaryReducer
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
