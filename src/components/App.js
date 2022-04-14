import MovieRow from "./movieRow/MovieRow";
import React from "react";

const App = () => {
  return (
    <div className="container--app">
      <div className="movie-rows">
        <MovieRow company="disney" />
        <MovieRow company="dreamworks" />
        <MovieRow company="universal" />
      </div>
    </div>
  );
};

export default App;
