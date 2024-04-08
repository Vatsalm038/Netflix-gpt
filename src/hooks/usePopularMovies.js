import { useEffect } from "react";
import {addPopularMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularPlayingMovies = useSelector(store=> store.movies.popularPlayingMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularPlayingMovies && getPopularMovies();
  }, []);
};
