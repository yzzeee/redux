const initialState = [];

const postReducer = (prevState = initialState, action) => {
  // 반환을 통해서
  // 새로운 상태를 만들어 줌
  switch (action.type) {
    case "ADD_POST":
      return [...prevState, action.data];
    default:
      // 오타 경우
      return prevState;
  }
};

module.exports = postReducer;
