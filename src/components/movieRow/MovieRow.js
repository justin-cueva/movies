import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Media from "react-media";

import "../../MovieRow.css";
import fetchMovies from "../../actions/fetchMovies";
import matchers from "@testing-library/jest-dom/matchers";

const MovieRow = ({ fetchMovies, movies, company }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    fetchMovies(21, company);
    console.log("fetching movies");
  }, []);

  return (
    <Media
      queries={{
        xSmall: "(max-width: 780px)",
        small: "(max-width: 980px)",

        medium: "(max-width: 1199px)",
        large: "(min-width: 1200px)",
      }}
      render={(matches) => {
        let num = 9;
        let cols = "grid-cols--9";
        if (matches.medium) {
          cols = "grid-cols--8";
          num = 8;
        }
        if (matches.small) {
          cols = "grid-cols--7";
          num = 7;
        }
        if (matches.xSmall) {
          cols = "grid-cols--5";
          num = 5;
        }
        return (
          <div className="movie-row">
            {movies[company] && (
              <div className="buttons">
                <h2> {company}</h2>
              </div>
            )}
            {movies[company] && (
              <div className="container--multi-row">
                {position !== 0 && num !== 5 && (
                  <button
                    className="btn--left"
                    onClick={() => setPosition((prev) => prev - 1)}
                  >
                    <BsChevronCompactLeft />
                  </button>
                )}
                {position !== 3 && num !== 5 && (
                  <button
                    className="btn--right"
                    onClick={() => setPosition((prev) => prev + 1)}
                  >
                    <BsChevronCompactRight />
                  </button>
                )}
                {[0, 1, 2, 3].map((index) => {
                  const start = index * num;
                  const end = (index + 1) * num;
                  return (
                    <div
                      key={index}
                      className={`conatiner--movies ${cols}  row-absolute-right--${index} transformed--${position}`}
                    >
                      {movies[company].slice(start, end).map((movie) => {
                        return (
                          <div className="movie" key={movie.id}>
                            <LazyLoadImage
                              key={movie.id}
                              className="movie-img"
                              effect="blur"
                              src={movie.image}
                              placeholder={
                                <div className="movie-placeholder" />
                              }
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
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { fetchMovies })(MovieRow);
