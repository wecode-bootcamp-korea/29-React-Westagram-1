import React from 'react';

import './LoginForm.scss';
import { Link } from 'react-router-dom';

function LoginForm({
  valueId,
  onChangeId,
  onKeyUpId,
  valuePw,
  onChangePw,
  onKeyUpPw,
  disabled,
}) {
  return (
    <div className="loginForm">
      <input
        value={valueId}
        onChange={onChangeId}
        onKeyUp={onKeyUpId}
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        value={valuePw}
        onChange={onChangePw}
        onKeyUp={onKeyUpPw}
        type="text"
        placeholder="비밀번호"
      />
      <Link to="/main-jiminJung">
        <button disabled={disabled ? true : false}>로그인</button>
      </Link>
    </div>
  );
}

export default LoginForm;
