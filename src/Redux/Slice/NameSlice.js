import { createSlice } from "@reduxjs/toolkit";

const dogNameSlice = createSlice({
  name: "dogNameSlice",
  initialState: {
    value: "",
  },
  reducers: {
    dogNameAction: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { dogNameAction } = dogNameSlice.actions;
export default dogNameSlice.reducer;