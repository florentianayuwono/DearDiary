import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface DiscoverState {
    url: string
}

const initialState: DiscoverState = {
    url: "https://deardiary.onrender.com"
};

// export const incrementAsync = createAsyncThunk(
//     'counter/fetchCount',
//     async (amount: number) => {
//       const response = await fetchCount(amount);
//       // The value we return becomes the `fulfilled` action payload
//       return response.data;
//     }
//   );
  
  export const discoverSlice = createSlice({
    name: 'discover',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // action = {type: "", payload: ---}
        reducer: (state, action) => {
            switch(action.type) {
                default:
                    return state
            }
        }
    }
  });
  
  export const { reducer } = discoverSlice.actions;
  
  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectCount = (state: RootState) => state.counter.value;
  