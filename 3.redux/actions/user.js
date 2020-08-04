const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    type: "LOGOUT",
  };
};

module.exports = {
  logIn,
  logOut,
};
