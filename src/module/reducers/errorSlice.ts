import { createSlice } from "@reduxjs/toolkit";

interface errorState {
  error: boolean;
}

const initialState: errorState = {
  error: false,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    error: (state) => {
      state.error = true;
    },
    success: (state) => {
      state.error = false;
    },
  },
});

export const { error, success } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;
