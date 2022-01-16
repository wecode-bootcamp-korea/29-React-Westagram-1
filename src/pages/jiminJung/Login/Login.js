import React, { useState } from 'react';

import './Login.scss';

import LoginForm from './LoginForm.js';

function Login() {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [isBtn, setIsBtn] = useState(true);

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };
  const handlePwInput = e => {
    setPwInput(e.target.value);
  };
  const handleBtn = b => {
    idInput.includes('@') && pwInput.length > 4
      ? setIsBtn(!isBtn)
      : setIsBtn(isBtn);
  };
  return (
    <div className="loginWrapper">
      <div className="login">
        <img
          className="logoImg"
          alt=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        />
        <LoginForm
          onChangeId={handleIdInput}
          onKeyUpId={handleBtn}
          onChangePw={handlePwInput}
          onKeyUpPw={handleBtn}
          disabled={isBtn}
        />
        <a href="LostPassword"> 비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default Login;
