import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const slice = createSlice({
  name: "datatest",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export default slice;

export const { setData } = slice.actions;

export const getData = (state) => {
  return state.datatest.data;
};
