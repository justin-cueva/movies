export default (state = { isOpen: false, movieId: null }, action) => {
  switch (action.type) {
    case "SET_MODAL_OPEN":
      return { isOpen: true, movieId: action.payload };
    case "SET_MODAL_CLOSE":
      return { isOpen: false, movieId: null };
    default:
      return state;
  }
};
