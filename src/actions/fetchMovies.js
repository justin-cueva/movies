// keys
// k_2xj015ok
// k_yg2kd715
// k_4t1ajrhh
// k_tcmb2ap0

export default (amount, company) => async (dispatch) => {
  const response = await fetch(
    `https://imdb-api.com/API/AdvancedSearch/k_2xj015ok?companies=${company}&count=${amount}`
  );

  const { results } = await response.json();
  console.log(1, results);

  dispatch({ type: "GOT_MOVIES", payload: [company, results] });
};
