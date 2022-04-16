import { useState } from "react";

import MovieRow from "./movieRow/MovieRow";
import Modal from "./modal/Modal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="container--app">
      <Modal isOpen={modalIsOpen} setOpen={setModalIsOpen} />
      <div className="movie-rows">
        <MovieRow company="disney" setModalIsOpen={setModalIsOpen} />
        <MovieRow company="dreamworks" setModalIsOpen={setModalIsOpen} />
        <MovieRow company="universal" setModalIsOpen={setModalIsOpen} />
      </div>
    </div>
  );
};

export default App;
