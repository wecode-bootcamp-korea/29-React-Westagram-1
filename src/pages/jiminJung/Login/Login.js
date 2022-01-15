import React, { useState } from 'react';

import './Login.scss';

import LoginForm from './LoginForm.js';

function Login() {
  const [useIdInput, setUsedIdInput] = useState('');
  const handleIdInput = i => {
    setUsedIdInput(i.target.value);
  };
  const [usePwInput, setUsedPwInput] = useState('');
  const handlePwInput = p => {
    setUsedPwInput(p.target.value);
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
          valueId={useIdInput}
          onChangeId={handleIdInput}
          valuePw={usePwInput}
          onChangePw={handlePwInput}
        />
        <a href="LostPassword"> 비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default Login;
