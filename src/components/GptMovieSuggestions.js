import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const { movieResults, movieNamesCame } = useSelector((store) => store.gpt);

  if (!movieNamesCame) return null;
  return (
    <div className="bg-black text-white p-4 m-4 bg-opacity-90">
      <div>
        {movieNamesCame.map((movieName,index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
