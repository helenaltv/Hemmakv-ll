"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import "./MovieDetails.css"; // För CSS-styling
import MetaTags from "../seo/MetaTags";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        console.log("Fetching movie details...");
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${id}&apikey=32552934`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <div className="movie-details">
      <MetaTags
        title="Om filmen"
        description="Läs mer om vad filmen handlar om"
      />
      {movie ? (
        <div className="movie-container">
          <img
            src={
              movie.Poster !== "N/A" ? movie.Poster : "placeholder-image-url"
            }
            alt={movie.Title}
            className="movie-poster"
          />
          <div className="movie-info">
            <h1>{movie.Title}</h1>
            <p>
              <strong>Year:</strong> {movie.Year}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <FavoriteButton movie={movie} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
