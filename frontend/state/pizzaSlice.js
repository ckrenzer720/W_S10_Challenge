import { createSlice } from "@reduxjs/toolkit";

let id = 1;
export const getNextId = () => id++;

const initialState = {
  fullName: "",
  size: "",
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
});

export const {} = pizzaSlice.actions;
export default pizzaSlice.reducer;
