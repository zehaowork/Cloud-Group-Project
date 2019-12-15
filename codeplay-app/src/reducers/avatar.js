const avatarReducer = (state = "GOBLIN", action) => {
  switch (action.type) {
    case "GOBLIN":
      return "GOBLIN";
    case "WARRIOR":
      return "WARRIOR";
    case "KNIGHT":
      return "KNIGHT";
    case "DRAGON":
      return "DRAGON";

    default:
      return state;
  }
};
export default avatarReducer;
