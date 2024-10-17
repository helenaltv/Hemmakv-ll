import React, { useState } from "react";

const MovieSearch = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchTerm);
    setSearchTerm(""); // Rensa sökfältet efter sökning
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Sök filmer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Sök</button>
    </form>
  );
};

export default MovieSearch;
