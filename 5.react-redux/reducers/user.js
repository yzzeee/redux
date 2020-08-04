const initialState = {
  isLoggingIn: false, // 로딩창 돌아가는 기능을 위해서
  data: null,
};

const userReducer = (prevState = initialState, action) => {
  // 반환을 통해서
  // 새로운 상태를 만들어 줌
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...prevState,
        isLoggingIn: true,
        data: null,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...prevState,
        isLoggingIn: false,
        data: action.data,
      };
    case "LOG_IN_FAILURE":
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
      };
    case "LOG_OUT_REQUEST":
      return {
        ...prevState,
        data: null,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...prevState,
        data: null,
      };
    default:
      // 오타 경우
      return prevState;
  }
};

module.exports = userReducer;
