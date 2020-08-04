const { createStore } = require("redux");

const reducer = (prevState, action) => {
  // 새로운 상태를 만들어 줌
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        compA: action.data,
        compB: 12,
        compC: null,
      };
    case "CHANGE_COMP_B":
      return {
        compA: "a",
        compB: action.data,
        compC: null,
      };
  }
};

const initialState = {
  // 리팩토링
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState); // 리듀서와 초기 상태가 들어감

console.log("1st", store.getState());

// action 생성자
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data: data,
  };
};

const changeCompB = (data) => {
  return {
    type: "CHANGE_COMP_B",
    data: data,
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

// => 원하는 대로 동작하지 않을 것임
