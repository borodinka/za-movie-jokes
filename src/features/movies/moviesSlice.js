import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";

const moviesSlive = createSlice({
  name: "movies",
  initialState: data,
  reducers: {},
});

export default moviesSlive.reducer;
