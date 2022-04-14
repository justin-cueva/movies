import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import useMediaQuery from "../../hooks/useMediaQuery";

import "../../MovieRow.css";
import fetchMovies from "../../actions/fetchMovies";

const MovieRow = ({ fetchMovies, movies, company }) => {
  const { colsPerRow } = useMediaQuery("(max-width: 1420px)");
  const [position, setPosition] = useState(0);

  const [mappingArr, setMappingArr] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < Math.ceil(21 / colsPerRow); i++) {
      arr.push(i);
    }
    setMappingArr(arr);
  }, [colsPerRow]);

  useEffect(() => {
    fetchMovies(21, company);
    console.log("fetching movies");
  }, []);

  return (
    <div className="movie-row">
      {movies[company] && (
        <div className="buttons">
          <h2> {company}</h2>
        </div>
      )}
      {movies[company] && (
        <div className="container--multi-row">
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

          {[...mappingArr].map((index, i) => {
            const start = index * colsPerRow;
            const end = (index + 1) * colsPerRow;
            if (colsPerRow === 5) {
              console.log(start, end);
              console.log(movies[company].slice(start, end));
            }
            return (
              <div
                key={index}
                className={`conatiner--movies grid-cols transformed--${position} row-absolute-right--${index}`}
              >
                {movies[company].slice(start, end).map((movie) => {
                  return (
                    <div className="movie" key={movie.id}>
                      <LazyLoadImage
                        key={movie.id}
                        className="movie-img"
                        effect="blur"
                        src={movie.image}
                        placeholder={<div className="movie-placeholder" />}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { fetchMovies })(MovieRow);
