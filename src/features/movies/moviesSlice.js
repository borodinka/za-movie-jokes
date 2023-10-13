import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";

const moviesSlive = createSlice({
  name: "movies",
  initialState: data.results,
  reducers: {},
});

export const selectAllMovies = (state) => state.movies;

export const selectMovieById = (state, movieId) =>
  state.movies.find((movie) => movie.id === Number(movieId));

export default moviesSlive.reducer;
