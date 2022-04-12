export default (amount: number, company: string) => async (dispatch: any) => {
  const response = await fetch(
    `https://imdb-api.com/API/AdvancedSearch/k_2xj015ok?companies=${company}&count=${amount}`
  );

  const { results } = await response.json();
  console.log(1, results);

  dispatch({ type: "GOT_MOVIES", payload: [company, results] });
};
