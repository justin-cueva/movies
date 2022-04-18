export const openModal = (movieId) => {
  return { type: "SET_MODAL_OPEN", payload: movieId };
};

export const closeModal = () => {
  return { type: "SET_MODAL_CLOSE" };
};
