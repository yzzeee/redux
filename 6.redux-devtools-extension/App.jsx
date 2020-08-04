import React, { useCallback } from "react";
import { connect }/** useDispatch, useSelector **/ from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import { logIn, logOut } from "./actions/user";
import { dispatch } from "./store";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

// 리액트에서 데이터 가져오는 컴포넌트를 컨테이너라고 함
class App {
  onClick = () => {
    this.props.dispatchLogIn({
        id: "yzzeee",
        password: "비밀번호",
      });
  };

  onLogout = () => {
    this.props.logOut();
  };

  render() {
    return (
      <div>
        <h2>Hello, react-redux!</h2>
        {user.isLoggingIn ? (
          <div>로그인 중</div>
        ) : user.data ? (
          <div>{user.data.nickname}</div>
        ) : (
          "로그인 해주세요"
        )}
        {!user.data ? (
          <button onClick={this.onClick}>로그인</button>
        ) : (
          <button onClick={this.onLogout}>로그아웃</button>
        )}
      </div>
    );
  }
}

// hooks에서는 useSelector와 useDispatch 함수로 state와 dispatch를 가져왔는데
// 클래스형에서는 mapStateToProps, mapDispatchToProps로 가져옴
// const App = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const onClick = useCallback(() => {
//     dispatch(
//       logIn({
//         id: "yzzeee",
//         password: "비밀번호",
//       })
//     );
//   }, []);

//   const onLogout = useCallback(() => {
//     dispatch(logOut());
//   }, []);

//   return (
//     <div>
//       <h2>Hello, react-redux!</h2>
//       {user.isLoggingIn ? (
//         <div>로그인 중</div>
//       ) : user.data ? (
//         <div>{user.data.nickname}</div>
//       ) : (
//         "로그인 해주세요"
//       )}
//       {!user.data ? (
//         <button onClick={onClick}>로그인</button>
//       ) : (
//         <button onClick={onLogout}>로그아웃</button>
//       )}
//     </div>
//   );
// };

// hooks 사용 시와 다른점은 컴포넌트가 렌더링 될 때마다 이 함수가 실행됨
// filterActiveUser(state.user); 이렇게 함수를 덧붙여서 사용할 수 있는데
// 성능상의 문제가 생길 수 있어서 reselect를 사용해줌 그런데 hooks는 자동으로 해줌
// 사람들 마다 클래스 컴포넌트 연결할 때 방식이 다다름.
const mapStateToProps = (state) => ({
 user: state.user;
})

const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn : (data) => dispatch(logIn(data));
  logOut : () => dispatch(logOut());
})

// connect에 연결해주어야 하는게 각각의 함수
// App Component의 기능을 확장하는 High Order Component
export default connect(mapStateToProps, mapDispatchToProps)(App);
