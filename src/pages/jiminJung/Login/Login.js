import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm.js';
import './Login.scss';

function Login() {
  const [formInput, setFormInput] = useState({
    id: '',
    pw: '',
  });
  const [isBtnActive, setIsBtnActive] = useState(true);
  const handleFormInput = e => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const handleBtn = () => {
    const isActive = !(formInput.id.includes('@') && formInput.pw.length > 4);
    setIsBtnActive(isActive);
  };

  useEffect(handleBtn, [formInput.id]);

  return (
    <div className="loginWrapper">
      <div className="login">
        <img
          className="logoImg"
          alt=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        />
        <LoginForm
          onChangeId={handleFormInput}
          onKeyUpId={handleBtn}
          onChangePw={handleFormInput}
          onKeyUpPw={handleBtn}
          disabled={isBtnActive}
        />

        <a href="LostPassword"> 비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default Login;
