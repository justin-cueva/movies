import { connect } from "react-redux";

import MovieRow from "./movieRow/MovieRow";
import Modal from "./modal/Modal";

const App = ({ modalIsOpen }) => {
  return (
    <div className="container--app">
      {modalIsOpen && <Modal />}
      <div className="movie-rows">
        <MovieRow company="disney" />
        <MovieRow company="dreamworks" />
        <MovieRow company="universal" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { modalIsOpen: state.movieModal.isOpen };
};

export default connect(mapStateToProps)(App);
