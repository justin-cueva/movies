import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "../../MovieRow.css";
import fetchMovies from "../../actions/fetchMovies";

const MovieRow = ({ fetchMovies, movies, company }) => {
  const [transformed, setTransformed] = useState(false);
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
          <button onClick={() => setPosition((prev) => prev - 1)}>left</button>
          <button onClick={() => setPosition((prev) => prev + 1)}>right</button>
        </div>
      )}
      {movies[company] && (
        <div className={`conatiner--movies transformed--${position}`}>
          {movies[company].map((movie) => {
            return (
              <LazyLoadImage
                key={movie.id}
                className="movie"
                effect="blur"
                src={movie.image}
                placeholder={<div className="movie-placeholder" />}
              />
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
