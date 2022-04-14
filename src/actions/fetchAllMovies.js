export default () => async (dispatch) => {
  const response = await fetch(
    "https://movies-dccb7-default-rtdb.firebaseio.com/movies.json"
  );

  const data = await response.json();

  console.log(data);

  dispatch({ type: "GOT_ALL_MOVIES", payload: data });
};
