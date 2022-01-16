import React, { useState } from 'react';

import './Login.scss';

import LoginForm from './LoginForm.js';

function Login() {
  const [useIdInput, setUseIdInput] = useState('');
  const [usePwInput, setUsePwInput] = useState('');
  const [isBtn, setIsBtn] = useState(true);

  const handleBtn = b => {
    setUseIdInput(b.target.value);
    setUsePwInput(b.target.value);
    b.target.value.includes('@') ? setIsBtn(!isBtn) : setIsBtn(isBtn);
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
          onChangeId={handleBtn}
          valuePw={usePwInput}
          // onChangePw=
          disabled={isBtn}
        />
        <a href="LostPassword"> 비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default Login;
