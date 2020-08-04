const initialState = {
  user: null,
};

const userReducer = (prevState = initialState, action) => {
  // 반환을 통해서
  // 새로운 상태를 만들어 줌
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOGOUT":
      return {
        ...prevState,
        user: null,
      };
    default:
      // 오타 경우
      return prevState;
  }
};

module.exports = userReducer;
