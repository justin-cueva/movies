import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useMediaQuery from "../../hooks/useMediaQuery";
import "react-lazy-load-image-component/src/effects/blur.css";

import fetchAllMovies from "../../actions/fetchAllMovies";
import useTitle from "../../hooks/useTitle";
import RowButtons from "./RowButtons";
import { openModal } from "../../actions/modalActions";
import "../../styles/MovieRow/MovieRow.css";

const MovieRow = ({ movies, company, fetchAllMovies, openModal }) => {
  const { title } = useTitle(company);
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
    fetchAllMovies();
  }, []);

  return (
    <div className="movie-row">
      {movies[company] && (
        <div>
          <h2>{title}</h2>
        </div>
      )}
      {movies[company] && (
        <div className="container--multi-row">
          <RowButtons
            position={position}
            setPosition={setPosition}
            mappingArr={mappingArr}
          />

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
                    <div
                      className="movie"
                      key={movie.id}
                      onClick={() => {
                        openModal(movie.id);
                      }}
                    >
                      <LazyLoadImage
                        key={movie.id}
                        className="movie-img"
                        effect="blur"
                        src={movie.image}
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

export default connect(mapStateToProps, { fetchAllMovies, openModal })(
  MovieRow
);
