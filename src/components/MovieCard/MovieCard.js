import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"; // Optional: för anpassad styling

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/150"
          }
          alt={movie.Title}
        />
        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
