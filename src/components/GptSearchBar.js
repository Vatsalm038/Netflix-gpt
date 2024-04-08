import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";
import cohere from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchNetflix = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchNetflix.current.value);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies from the query: " +
      searchNetflix.current.value +
      ". Only give me name of 5 movies, comma seperated like the example reslt given ahead. Example Result : Gadar , Sholay, Don";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);

    const chatStream = await cohere.chatStream({
      chatHistory: [{ role: "USER", message: "HI" }],
      message: gptQuery,
      connectors: [{ id: "web-search" }],
    });
    console.log(chatStream);

    let movieNames = "";
    let previousText = "";

    for await (const message of chatStream) {
      if (message.eventType === "text-generation") {
        const generatedText = message.text.trim();

        if (generatedText === ",") {
          // Check if the previous text is not empty before adding it to movie names
          if (previousText.trim()) {
            movieNames += previousText.trim() + ", ";
          }
          previousText = ""; // Reset previous text for the next movie name
        } else {
          // Concatenate the text to form the movie name
          previousText += generatedText; // Append text without space
        }
      }
    }

    // Add the last movie name if there's any left
    if (previousText.trim()) {
      movieNames += previousText.trim();
    }

    // Insert spaces between consecutive uppercase letters in the movie names
    movieNames = movieNames.replace(/([A-Z])/g, " $1").trim();

    console.log(movieNames);
    const gptMovies = movieNames.split(",");
    console.log(gptMovies);
    // searchMovieTmdb(gptMovies[0]);
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    // For each moive 5 promise
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({
        movieNamesCame: gptMovies,
        movieResults: tmdbResults,
      })
    );
  };

  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchNetflix}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
