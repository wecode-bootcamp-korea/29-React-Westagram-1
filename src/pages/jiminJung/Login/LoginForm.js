import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

function LoginForm({ onChangeId, onKeyUpId, onChangePw, onKeyUpPw, disabled }) {
  return (
    <div className="loginForm">
      <input
        className="input id"
        name="id"
        onChange={onChangeId}
        onKeyUp={onKeyUpId}
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        className="input pw"
        name="pw"
        onChange={onChangePw}
        onKeyUp={onKeyUpPw}
        type="password"
        placeholder="비밀번호"
      />
      <Link to="/main-jiminJung">
        <button className="loginBtn" disabled={disabled ? true : false}>
          로그인
        </button>
      </Link>
    </div>
  );
}

export default LoginForm;
