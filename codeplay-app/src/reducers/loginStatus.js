const loginStatusReducer = (state = "LOG_OFF", action) => {
  switch (action.type) {
    case "LOAD_STATUS":
      return action.type;
    default:
      return state;
  }
};
export default loginStatusReducer;
