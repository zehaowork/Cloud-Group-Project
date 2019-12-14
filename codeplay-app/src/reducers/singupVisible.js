const signupVisibleReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGNUP_PAGE":
      return true;
    case "LOGIN_PAGE":
      return false;
    default:
      return false;
  }
};

export default signupVisibleReducer;
