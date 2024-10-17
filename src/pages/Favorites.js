"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "../seo/MetaTags";
import { FaTrash } from "react-icons/fa"; // Importera sopkorgsikonen
import "./Favorites.css"; // Se till att din CSS-fil är importerat

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (imdbID) => {
    const updatedFavorites = favorites.filter(
      (movie) => movie.imdbID !== imdbID
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <div>
        <MetaTags
          title="Dina Favoriter"
          description="Spara dina favoritfilmer i egen lista"
        />
      </div>
      <h1>Mina Favoriter</h1>
      <div className="favorite-list">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div key={movie.imdbID} className="favorite-item">
              {" "}
              {/* Flytta key hit */}
              <Link to={`/movie/${movie.imdbID}`}>
                <h3>
                  {movie.Title} ({movie.Year})
                </h3>
              </Link>
              <FaTrash
                className="trash-icon"
                onClick={() => removeFavorite(movie.imdbID)}
              />
            </div>
          ))
        ) : (
          <p>Inga favoriter ännu.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
