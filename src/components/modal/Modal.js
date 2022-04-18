import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { BsXCircle } from "react-icons/bs";
import { Oval } from "react-loader-spinner";

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
        plot: data.plotShort.plainText.split("\n")[0],
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
        <div className="container--relative">
          <span className="modal__icon--X" onClick={() => closeModal()}>
            <BsXCircle />
          </span>
          {!movieData ? (
            <div className="loading-spinner--modal">
              <Oval height="100" width="100" color="#fff" ariaLabel="loading" />
            </div>
          ) : (
            <React.Fragment>
              <h2 className="heading--modal">
                <span>{movieData.title}</span>
                <span className="heading--year">{movieData.year}</span>
              </h2>
              <p className="movie-plot">{movieData.plot}</p>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>,
    document.querySelector("#modal")
  );
};

const mapStateToProps = (state) => {
  return { movieModal: state.movieModal };
};

export default connect(mapStateToProps, { closeModal })(Modal);
