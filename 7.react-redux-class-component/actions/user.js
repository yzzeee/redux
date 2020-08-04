const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            // 성공 후 데이터
            userId: 1,
            nickname: "yzzeee",
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
        dispatch(logOutSuccess());
      }, 2000);
    } catch (e) {
      dispatch(logOutFailure(e));
    }
  };
};

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";

const LOG_OUT_REQUEST = "LOGOUT_REQUEST";
const LOG_OUT_SUCCESS = "LOGOUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

const logInRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

const logInSuccess = (data) => {
  // sync action creator
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

const logInFailure = (data) => {
  // sync action creator
  return {
    type: LOG_IN_FAILURE,
    data,
  };
};

const logOutRequest = (data) => {
  return {
    type: LOG_OUT_REQUEST,
    data,
  };
};

const logOutSuccess = (data) => {
  // sync action creator
  return {
    type: LOG_OUT_SUCCESS,
  };
};

const logOutFailure = (data) => {
  // sync action creator
  return {
    type: LOG_OUT_FAILURE,
  };
};

module.exports = {
  logIn,
  logOut,
};
