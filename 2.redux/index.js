// 리덕스 사용하기
const { createStore } = require("redux");
const reducer = require("./reducers/reducer");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

// 리듀서를 만들 때 불변성을 유지하기 위해 데이터를 어떻게 받아오면 좋을 지생각해볼 때
// 다음 상태를 2개 정도 더 예상해보면 만들기 쉬움
/**const initialState = {
  user: null,
  posts: [],
};

const nextState = {
  user: null,
  posts: [{ id: 1 }],
};

const nextState = {
  user: null,
  posts: [{ id: 1 }, { id: 2 }],
};
 */

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

/**
const nextState = {
  ...initialState,
  posts: [action.data],
};

const nextState = {
  ...initialState,
  posts: [...initialState.post, action.data],
};
 */

const store = createStore(reducer, initialState); // 리듀서와 초기 상태가 들어감
store.subscribe(() => {
  // react-redux에 들어있음
  console.log("changed");
});

console.log("1st", store.getState());

// action creator를 만들 때 내가 initialState를 어떻게 바꿀지만 생각하면
// 그나마 만들기 쉬움

// ===================================================== 여기 위까지 미리 정의 해놓아야 하는 것들
// ============ 아래는 화면에서 동작 할 때 실행하는 것들
store.dispatch(
  logIn({
    id: 1,
    name: "yzzeee",
    admin: true,
  })
);

console.log("2nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "Hello, Redux",
  })
);
console.log("3nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "Hello, Redux2",
  })
);
console.log("4nd", store.getState());

store.dispatch(logOut());

console.log("5nd", store.getState());

/**
 *
 * 처음에 스토어 하나를 만들어 놓고
 * 그 다음 액션 쫘아악 만들고
 * 그 액션 디스패치 하고
 * 그 디스패치 된 액션은 미리 만들어둔 리듀서에 걸려서 다음 스테이트를 만들어 낸다
 * 리듀서가 엄청 많이 길어지고 액션도 많아지는 단점이 있음
 *
 */
