import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
