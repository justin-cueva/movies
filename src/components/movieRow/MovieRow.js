import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "../../MovieRow.css";
import fetchMovies from "../../actions/fetchMovies";

const MovieRow = ({ fetchMovies, movies, company }) => {
  useEffect(() => {
    fetchMovies(8, company);
    console.log("fetching movies");
  }, []);

  return (
    <div className="movie-row">
      <h2>{company}</h2>
      <div className="conatiner--movies">
        {movies[company] &&
          movies[company].map((movie) => {
            return (
              <LazyLoadImage
                effect="blur"
                key={movie.id}
                className="movie"
                src={movie.image}
              />
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { fetchMovies })(MovieRow);
