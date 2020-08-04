const { createStore } = require("redux");

const reducer = () => {};

const initialState = {
  // 리팩토링
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState); // 리듀서와 초기 상태가 들어감

// action
const changeCompAtoB = {
  // CompA의 data를 b로 바꾸는 액션
  type: "CHANGE_COMP_A",
  data: "b",
};

const changeCompAtoC = {
  type: "CHANGE_COMP_A_TO_C",
  data: "c",
};

const changeCompAtoD = {
  type: "CHANGE_COMP_A_TO_D",
  data: "d",
};

// ==> 위의 액션들은 너무 구체적임

console.log(store.getState());
