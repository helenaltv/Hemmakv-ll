import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css"; // Optional: för anpassad styling

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p className="no-movies">Inga filmer hittades</p>
      )}
    </div>
  );
};

export default MovieList;
