import React, { useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList/MovieList";
import "./Home.css";
import MetaTags from "../seo/MetaTags";
import MovieSearch from "../components/SearchBar/MovieSearch";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (searchTerm) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=32552934`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  return (
    <div className="home">
      <MetaTags
        title="Hemmakvälls Filmbibliotek"
        description="En filmbibliotek för dig som gillar filmer"
      />
      <h1>Hemmakvälls Filmbibliotek</h1>
      {/* Passera down searchMovies som prop till MovieSearch */}
      <MovieSearch searchMovies={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
