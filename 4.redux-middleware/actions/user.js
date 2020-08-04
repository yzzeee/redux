const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            user: { isLoggingIn: true },
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logOut = (data) => {
  return (dispatch, getState) => {
    dispatch(logOutRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logOutSuccess({
            isLoggingIn: false,
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logOutFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const logInSuccess = (data) => {
  // sync action creator
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const logInFailure = (data) => {
  // sync action creator
  return {
    type: "LOG_IN_FAILURE",
    data,
  };
};

const logOutRequest = (data) => {
  return {
    type: "LOG_OUT_REQUEST",
    data,
  };
};

const logOutSuccess = (data) => {
  // sync action creator
  return {
    type: "LOG_OUT_SUCCESS",
    data,
  };
};

const logOutFailure = (data) => {
  // sync action creator
  return {
    type: "LOG_OUT_FAILURE",
    data,
  };
};

module.exports = {
  logIn,
  logOut,
};
