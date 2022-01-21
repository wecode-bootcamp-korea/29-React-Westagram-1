import React, { useState } from 'react';
import LoginForm from './LoginForm.js';
import './Login.scss';

function Login() {
  const [formInput, setFormInput] = useState({
    id: '',
    pw: '',
  });
  const handleFormInput = e => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const isActive = !(formInput.id.includes('@') && formInput.pw.length > 4);

  return (
    <div className="login">
      <div className="loginBox">
        <img
          className="logoImg"
          alt=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        />
        <LoginForm
          onChangeId={handleFormInput}
          onChangePw={handleFormInput}
          disabled={isActive}
        />
        <a className="lostPassword" href="LostPassword">
          {' '}
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
