// hemmakvall/src/sitemap/sitemap-routes.js
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Favorites from "../pages/Favorites";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
];

export default routes;
