export default (amount: number, company: string) => async (dispatch: any) => {
  const response = await fetch(
    `https://imdb-api.com/API/AdvancedSearch/k_2xj015ok?companies=${company}&count=${amount}`
  );
  console.log(response);

  const { results } = await response.json();
  console.log(results);

  dispatch({ type: "GOT_MOVIES", payload: [company, results] });
};
