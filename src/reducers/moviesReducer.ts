type Actions = { type: "GOT_MOVIES"; payload: any };

export default (state = {}, action: Actions) => {
  switch (action.type) {
    case "GOT_MOVIES":
      const newArrayOfMovies = action.payload[1].map((movie: any) => {
        return { id: movie.id, image: movie.image, title: movie.title };
      });

      return { ...state, [action.payload[0]]: newArrayOfMovies };
    default:
      return state;
  }
};
