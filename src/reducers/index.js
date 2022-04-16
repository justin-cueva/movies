import { combineReducers } from "redux";

import moviesReducer from "./moviesReducer";
import movieModalReducer from "./movieModalReducer";

export default combineReducers({
  movies: moviesReducer,
  movieModal: movieModalReducer,
});
