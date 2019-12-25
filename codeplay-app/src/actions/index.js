export const login = () => {
  return {
    type: "LOG_IN"
  };
};

export const changeAvatar = avatar => {
  return {
    type: "CHANGE_AVATAR",
    payload: avatar
  };
};

export const changeView = page => {
  return {
    type: "CHANGE_VIEW",
    payload: page
  };
};

export const loadProfile = profile => {
  return {
    type: "LOAD_PROFILE",
    payload: profile
  };
};

export const loadLoginStatus = status => {
  return {
    type: "LOAD_STATUS",
    payload: status
  };
};

export const loadUser = user => {
  return {
    type: "LOAD_USER",
    payload: user
  };
};
