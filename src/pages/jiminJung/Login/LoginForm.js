import React, { useState } from 'react';

import './LoginForm.scss';
import { Link } from 'react-router-dom';

function LoginForm(props) {
  return (
    <div className="loginForm">
      <input
        value={props.valueId}
        onChange={props.onChangeId}
        onKeyUp={props.onKeyUpId}
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        value={props.valuePw}
        onChange={props.onChangePw}
        onKeyUp={props.onKeyUpPw}
        type="text"
        placeholder="비밀번호"
      />
      <Link to="/main-jiminJung">
        <button disabled={props.disabled ? true : false}>로그인</button>
      </Link>
    </div>
  );
}

export default LoginForm;
