const { createStore } = require("redux");

const reducer = () => {};

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

changeCompA("b");
changeCompA("c");

// store.dispatch({
//   type: "CHANGE_COMP_A",
//   data: b,
// });
store.dispatch(changeCompA("b"));

console.log("2nd", store.getState());
