import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [values, setValues] = useState({ Id: '', Password: '' });
  const handleBtn = !(values.Id.includes('@') && values.Password.length > 4);

  const handleInput = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Main-hyelinPark');
  };

  return (
    <div className="Login">
      <div className="loginBox">
        <p className="logo">Westagram</p>
        <form className="inputBox">
          <input
            type="text"
            name="Id"
            value={values.Id}
            className="loginId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
          />
          <input
            type="password"
            name="Password"
            value={values.Password}
            className="loginPassword"
            placeholder="비밀번호"
            onChange={handleInput}
          />
          <button className="loginBtn" onClick={goToMain} disabled={handleBtn}>
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
