const { produce } = require("immer");

const initialState = {
  isLoggingIn: false, // 로딩창 돌아가는 기능을 위해서
  data: null,
};

// immer는 다음 상태를 만들어주는 친구
// 아래와 같은 방식으로 동작한다.
// nextState = produce(prevState, (draft) => {})

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.isLoggingIn = true;
        draft.data = null;
        break;
      case "LOG_IN_SUCCESS":
        draft.isLoggingIn = false;
        draft.data = action.data;
        break;
      case "LOG_IN_FAILURE":
        draft.isLoggingIn = false;
        draft.data = null;
        break;
      case "LOG_OUT_REQUEST":
        draft.data = null;
        break;
      case "LOG_OUT_SUCCESS":
        draft.data = null;
        break;
      default:
        draft.data = null;
        break;
    }
  });
};

// // 반환을 통해서
// // 새로운 상태를 만들어 줌
// switch (action.type) {
//   case "LOG_IN_REQUEST":
//     return {
//       ...prevState,
//       isLoggingIn: true,
//       data: null,
//     };
//   case "LOG_IN_SUCCESS":
//     return {
//       ...prevState,
//       isLoggingIn: false,
//       data: action.data,
//     };
//   case "LOG_IN_FAILURE":
//     return {
//       ...prevState,
//       isLoggingIn: false,
//       data: null,
//     };
//   case "LOG_OUT_REQUEST":
//     return {
//       // 리덕스에서는 불변성을 지키기위해서 spread 연산자를 사용하는데
//       // 객체의 깊이가 깊어지면 이게 지져분 해질 수 있음
//       // 예를 들어서 아래와 같다.
//       /**
//        * state.deep.deeper.deepest.a = 'b'; // 이렇게만 바꾸고 싶은데
//        *
//        * ...prevState,
//        * deep: {
//        *    ...prevState.deep,
//        *     deeper: {
//        *        ...prevState.deeper,
//        *        deepest: {
//        *            ...prevState.deepest,
//        *            a: 'b' // 이렇게 객체를 타고 들어가서 바꿔야하는 경우가 생기면 코드가 복잡해짐 따라서 immer가 필요
//        *        }
//        *     }
//        * }
//        */
//       ...prevState,
//       data: null,
//     };
//   case "LOG_OUT_SUCCESS":
//     return {
//       ...prevState,
//       data: null,
//     };
//   default:
//     // 오타 경우
//     return prevState;
// }

module.exports = userReducer;
