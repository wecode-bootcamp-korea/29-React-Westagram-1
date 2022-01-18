import './Login.scss';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [inputId, SetInputId] = useState(false);
  const [inputPassword, SetInputPassword] = useState(false);

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Main');
  };

  return (
    <div className="Login">
      <div className="loginBox">
        <p className="logo">Westagram</p>
        <form className="inputBox">
          <input
            type="text"
            className="loginId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={e => SetInputId(e.target.value.includes('@'))}
          />
          <input
            type="password"
            className="loginPassword"
            placeholder="비밀번호"
            onChange={e => SetInputPassword(e.target.value.length > 5)}
          />
          <button
            className="loginBtn"
            disabled={!inputId || !inputPassword}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <div className="or">또는</div>
        <a className="facebook" href="http://www.facebook.com">
          Facebook으로 로그인
        </a>
        <a className="forgetPassword" href="http://www.google.co.kr">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
