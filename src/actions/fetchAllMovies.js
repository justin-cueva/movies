export default () => async (dispatch) => {
  const response = await fetch(
    "https://movies-dccb7-default-rtdb.firebaseio.com/movies.json"
  );

  const data = await response.json();

  dispatch({ type: "GOT_ALL_MOVIES", payload: data });
};
