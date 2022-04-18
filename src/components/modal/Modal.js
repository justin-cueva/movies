import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { closeModal } from "../../actions/modalActions";
import "../../styles/Modal/Modal.css";
import "../../styles/Modal/Overlay.css";

const Modal = ({ movieModal, closeModal }) => {
  const [movieData, setMovieData] = useState(null);

  const getData = async (id) => {
    try {
      const response = await fetch(
        `https://imdb-api.com/en/API/Wikipedia/k_tcmb2ap0/${id}`
      );
      const data = await response.json();
      console.log(data);
      const filteredData = {
        errorMessage: data.errorMessage,
        title: data.title,
        year: data.year,
        plot: data.plotShort.plainText,
      };
      console.log(filteredData);
      setMovieData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("fetching");
    getData(movieModal.movieId);
  }, []);

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="overlay" onClick={() => closeModal()} />
      <div className="modal">
        <span>{movieModal.movieId}</span>
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </React.Fragment>,
    document.querySelector("#modal")
  );
};

const mapStateToProps = (state) => {
  return { movieModal: state.movieModal };
};

export default connect(mapStateToProps, { closeModal })(Modal);
