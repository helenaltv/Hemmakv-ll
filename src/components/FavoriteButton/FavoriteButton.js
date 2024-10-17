import React, { useState } from "react";

const FavoriteButton = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.find((fav) => fav.imdbID === movie.imdbID);

    if (exists) {
      // Ta bort från favoriter
      const updatedFavorites = favorites.filter(
        (fav) => fav.imdbID !== movie.imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Lägga till i favoriter
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? "Ta bort från favoriter" : "Lägg till i favoriter"}
    </button>
  );
};

export default FavoriteButton;
