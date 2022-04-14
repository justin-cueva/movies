export default (state = {}, action) => {
  switch (action.type) {
    case "GOT_MOVIES":
      const newArrayOfMovies = action.payload[1].map((movie) => {
        return { id: movie.id, image: movie.image, title: movie.title };
      });

      return { ...state, [action.payload[0]]: newArrayOfMovies };
    case "GOT_ALL_MOVIES":
      return { ...Object.values(action.payload)[0] };
    default:
      return state;
  }
};
