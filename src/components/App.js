import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieRow from "./movieRow/MovieRow";
import Modal from "./modal/Modal";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container--app">
        <div className="movie-rows">
          <MovieRow company="disney" />
          <MovieRow company="dreamworks" />
          <MovieRow company="universal" />
        </div>
        <Routes>
          <Route path={"/"} element={<div></div>} />
          <Route path={"/:movieId"} element={<Modal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
