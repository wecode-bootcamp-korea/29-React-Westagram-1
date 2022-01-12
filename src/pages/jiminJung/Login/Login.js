import React from 'react';

import './Login.scss';

// import Button from '../components/Button';
// import Input from '../components/Input';

function Login() {
  return (
    <div className="loginWrapper">
      <div className="login">
        <img
          className="logoImg"
          alt=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        />
        <div className="loginForm">
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input type="password" placeholder="비밀번호" />
          {/* <Link to="/Main"> */}
          <button name="로그인" />
          {/* </Link> */}
        </div>
        <a href=""> 비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default Login;
