import { createSlice } from "@reduxjs/toolkit";
import { ResolveThunk } from "../store/thunksResolver";
import { IResponseReducerState } from "@/models/reducerStateModels";

const reducerInitalState: IResponseReducerState = {
  loading: false,
  error: null,
  message: null,
};

const responseReducer = createSlice({
  name: "ResponseReducer",
  initialState: reducerInitalState,
  reducers: {
    clearResponseState: (state) => {
      state.loading = false;
      state.error = null;
      state.message = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    clearLoading: (state) => {
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => ResolveThunk<any>(builder, []),
});

export const {
  setError,
  setLoading,
  setMessage,
  clearLoading,
  clearResponseState,
} = responseReducer.actions;
export default responseReducer.reducer;
