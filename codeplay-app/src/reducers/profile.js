const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_PROFILE":
      return action.payload;
    default:
      return state;
  }
};
