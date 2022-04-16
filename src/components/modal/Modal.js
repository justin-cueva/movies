import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { closeModal } from "../../actions/modalActions";
import "../../styles/Modal/Modal.css";
import "../../styles/Modal/Overlay.css";

const Modal = ({ movieModal, closeModal }) => {
  if (!movieModal.isOpen) return null;

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
