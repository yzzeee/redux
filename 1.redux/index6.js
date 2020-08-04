const { createStore } = require("redux");

const reducer = (prevState, action) => {
  // 반환을 통해서
  // 새로운 상태를 만들어 줌
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      // 오타 경우
      return prevState;
  }
};

const initialState = {
  // 리팩토링
  compA: "a",
  compB: 12,
  compC: null,
};

// // 아래와 같이 사용 시 중복 발생 이것은 예시
// const nextState = {
//   ...initialState,
//   compA: action.data,
// };

const store = createStore(reducer, initialState); // 리듀서와 초기 상태가 들어감
store.subscribe(() => {
  // react-redux에 들어있음
  console.log("changed");
});

console.log("1st", store.getState());

// action 생성자
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data: "b",
  };
};

changeCompA("b");
changeCompA("c");

// ==> 액션 생성자를 만들지 않았을 경우 아래와 같이 작성 가능
// store.dispatch({
//   type: "CHANGE_COMP_A",
//   data: b,
// });
store.dispatch(changeCompA("b"));

console.log("2nd", store.getState());

/**
 *
 * 처음에 스토어 하나를 만들어 놓고
 * 그 다음 액션 쫘아악 만들고
 * 그 액션 디스패치 하고
 * 그 디스패치 된 액션은 미리 만들어둔 리듀서에 걸려서 다음 스테이트를 만들어 낸다
 * 리듀서가 엄청 많이 길어지고 액션도 많아지는 단점이 있음
 *
 */
