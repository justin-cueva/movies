import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons";

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
          {position === 0 ? null : (
            <button onClick={() => setPosition((prev) => prev - 1)}>
              left
            </button>
          )}
          {position === 2 ? null : (
            <button onClick={() => setPosition((prev) => prev + 1)}>
              right
            </button>
          )}
        </div>
      )}
      {movies[company] && (
        <div className="container--multi-row">
          {[0, 1, 2].map((index) => {
            const start = index * 9;
            const end = (index + 1) * 9;
            return (
              <div
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
