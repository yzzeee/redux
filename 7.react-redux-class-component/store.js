// 리덕스 사용하기
const { createStore, applyMiddleware, compose } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
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
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

// next가 dispatch라고 생각
const firstMiddleware = (store) => (next) => (action) => {
  console.log("로깅 : " + action.type); // 기본 동작에 콘솔 로그 기능 추가
  next(action); // 기본 동작
};

// redux-thunk 라이브러리와 동일
// action은 객체이고 동기적인 작업 밖에 처리하지 못함
// 로그인, 로그아웃, 게시글 작성과 같이 서버를 한 번씩 거쳐야하는 비동기적인 작업은
// 리덕스와 약속을 한 것임
// 앞으로 비동기 작업은 함수를 넣어서 dispatch를 할 테니 thunk가 실행을 해주어라!
const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);
};

/**
 * // 위와 동일한 표현식
 * function firstMiddleware(store) {
 *    return function (next) {
 *        return functio (action) {
 *
 *        }
 *    }
 * }
 *
 *
 */

// const enhancer = applyMiddleware; 이렇게만 해도 인핸서로서 동작하는데
// 컴포즈를 하는 이유는 예를 들어 리덕스 데브툴즈 리덕스에서 나오는
// 액션과 디스패치되는 것들 스테이트 들을 편하게 볼 수 있도록 하는 도구를 붙일 수 있도록 함
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(
        applyMiddleware(firstMiddleware, thunkMiddleware)
        // typeof window === "object" &&
        //   typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefind"
        //   ? window.__REDUX_DEVTOOLS_EXTENSION__()
        //   : (f) => f
      );

const store = createStore(reducer, initialState, enhancer); // 리듀서와 초기 상태가 들어감

module.exports = store;
// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "Hello, Redux",
//   })
// );
// console.log("3nd", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 2,
//     content: "Hello, Redux2",
//   })
// );
// console.log("4nd", store.getState());

// store.dispatch(logOut());

// console.log("5nd", store.getState());

/**
 *
 * 처음에 스토어 하나를 만들어 놓고
 * 그 다음 액션 쫘아악 만들고
 * 그 액션 디스패치 하고
 * 그 디스패치 된 액션은 미리 만들어둔 리듀서에 걸려서 다음 스테이트를 만들어 낸다
 * 리듀서가 엄청 많이 길어지고 액션도 많아지는 단점이 있음
 *
 */
