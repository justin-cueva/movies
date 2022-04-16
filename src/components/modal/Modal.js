import React from "react";
import ReactDOM from "react-dom";

import "../../styles/Modal/Modal.css";
import "../../styles/Modal/Overlay.css";

const Modal = ({ isOpen, setOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="overlay" onClick={() => setOpen(false)} />
      <div className="modal">
        <span>Modal</span>
        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    </React.Fragment>,
    document.querySelector("#modal")
  );
};

export default Modal;
