const loggedReducer = (state = false, actiton) => {
  switch (actiton.type) {
    case "LOG_IN":
      return true;
    case "LOG_OFF":
      return false;
    default:
      return false;
  }
};

export default loggedReducer;
