import React from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "../../styles/MovieRow/RowButtons.css";

const RowButtons = ({ position, setPosition, mappingArr }) => {
  return (
    <React.Fragment>
      {position !== 0 && (
        <button
          className="btn--left"
          onClick={() => setPosition((prev) => prev - 1)}
        >
          <BsChevronCompactLeft />
        </button>
      )}
      {position !== mappingArr[mappingArr.length - 1] && (
        <button
          className="btn--right"
          onClick={() => setPosition((prev) => prev + 1)}
        >
          <BsChevronCompactRight />
        </button>
      )}
    </React.Fragment>
  );
};

export default RowButtons;
