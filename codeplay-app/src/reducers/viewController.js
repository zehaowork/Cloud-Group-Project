const viewControllerReducer = (state = "LOGIN_PAGE", action) => {
  switch (action.type) {
    case "CHANGE_VIEW":
      return action.payload;
    default:
      return state;
  }
};

export default viewControllerReducer;
