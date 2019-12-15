export const login = () => {
  return {
    type: "LOG_IN"
  };
};

export const changeAvatar = avatar => {
  return {
    type: changeAvatar,
    payload: avatar
  };
};

export const changeView = page => {
  return {
    type: "CHANGE_VIEW",
    payload: page
  };
};
