import { BaseReducerState } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface AppReducerState extends BaseReducerState {
  theme: "light" | "dark";
}
const initialState: AppReducerState = {
  theme: "light",
};

const reducer = createSlice({
  name: "AppReducer",
  initialState,
  reducers: {
    setTheme: (state, action: { payload: "light" | "dark" }) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = reducer.actions;

export default reducer.reducer;
