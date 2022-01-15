import React, { useState } from 'react';

import './LoginForm.scss';

function LoginForm(props) {
  return (
    <div className="loginForm">
      <input
        value={props.valueId}
        onChange={props.onChangeId}
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        value={props.valuePw}
        onChange={props.onChangePw}
        type="text"
        placeholder="비밀번호"
      />
      {/* <Link to="/Main"> */}
      <button>로그인</button>
      {/* </Link> */}
    </div>
  );
}

export default LoginForm;
