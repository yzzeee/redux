const { createStore } = require("redux");

const reducer = () => {};

const store = createStore(reducer, {
  compA: "a",
  compB: 12,
  compC: null,
});

console.log(store.getState());
