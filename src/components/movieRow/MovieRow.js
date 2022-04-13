import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import "../../MovieRow.css";
import fetchMovies from "../../actions/fetchMovies";

const MovieRow = ({ fetchMovies, movies, company }) => {
  const [position, setPosition] = useState(0);

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
          {position === 0 ? null : (
            <button
              className="btn--left"
              onClick={() => setPosition((prev) => prev - 1)}
            >
              <BsChevronCompactLeft />
            </button>
          )}
          {position === 2 ? null : (
            <button
              className="btn--right"
              onClick={() => setPosition((prev) => prev + 1)}
            >
              <BsChevronCompactRight />
            </button>
          )}
          {[0, 1, 2].map((index) => {
            const start = index * 9;
            const end = (index + 1) * 9;
            return (
              <div
                key={index}
                className={`conatiner--movies row-absolute-right--${index} transformed--${position}`}
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
