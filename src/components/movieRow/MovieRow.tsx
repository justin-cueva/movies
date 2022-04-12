import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import "../../MovieRow.css";
import fetchMovies from "../../actions/fetchMovies";

const MovieRow = ({ fetchMovies, movies, company }: Props) => {
  useEffect(() => {
    fetchMovies(8, company);
    console.log("fetching movies");
  }, []);

  return (
    <div className="movie-row">
      <h2>{company}</h2>
      <div className="conatiner--movies">
        {movies[company] &&
          movies[company].map((movie: any) => {
            return <img key={movie.id} className="movie" src={movie.image} />;
          })}
      </div>
    </div>
  );
};

type RootState = {
  movies: any;
};

const mapStateToProps = (state: RootState) => {
  return { movies: state.movies };
};

const connector = connect(mapStateToProps, { fetchMovies });

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  company: string;
};

export default connector(MovieRow);
