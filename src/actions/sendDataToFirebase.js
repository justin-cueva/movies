export default () => async (_, getState) => {
  const movies = getState().movies;

  await fetch("https://movies-dccb7-default-rtdb.firebaseio.com/movies.json", {
    method: "POST",
    body: JSON.stringify(movies),
  });
};
