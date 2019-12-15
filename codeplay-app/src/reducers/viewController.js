const viewControllerReducer = (state = "LOGIN_PAGE", action) => {
  switch (action.type) {
    case "SIGNUP_PAGE":
      return "SIGNUP_PAGE";
    case "LOGIN_PAGE":
      return "LOGIN_PAGE";
    case "RESET_PAGE":
      return "RESET_PAGE";
    case "USER_INFO_PAGE":
      return "USER_INFO_PAGE";
    case "GAME_PAGE":
      return "GAME_PAGE";
    default:
      return "LOGIN_PAGE";
  }
};

export default viewControllerReducer;
