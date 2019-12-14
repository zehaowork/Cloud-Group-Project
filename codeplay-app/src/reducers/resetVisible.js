const resetVisibleReducer = (state = false, action) => {
  switch (action.type) {
    case "RESET_PAGE":
      return true;
    case "USER_INFO_PAGE":
    default:
      return false;
  }
};

export default resetVisibleReducer;
