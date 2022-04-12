import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import "../../MovieRow.css";
import fetchMovies from "../../actions/fetchMovies";

const MovieRow = ({ fetchMovies, movies }: PropsFromRedux) => {
  useEffect(() => {
    fetchMovies(5, "disney");
    console.log("fetching movies");
  }, []);

  return (
    <div className="movie-row">
      <h2>MovieRow</h2>
      <div className="conatiner--movies"></div>
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

export default connector(MovieRow);
