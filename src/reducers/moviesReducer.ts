type Actions = { type: "GOT_MOVIES"; payload: any };

export default (state = {}, action: Actions) => {
  switch (action.type) {
    case "GOT_MOVIES":
      return { ...state, [action.payload[0]]: action.payload[1] };
    default:
      return state;
  }
};
