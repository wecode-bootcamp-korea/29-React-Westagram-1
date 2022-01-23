import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { FaFacebookSquare } from 'react-icons/fa';

function Login(props) {
  const navigate = useNavigate();

  const validation = () => {
    fetch('http://10.58.2.189:8000/login/', {
      method: 'POST',
      body: JSON.stringify({
        email: form.id,
        password: form.pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          navigate('/main-seunghyunKark');
        } else if (res.message === 'INVALID_PASSWORD') {
          alert('비밀번호가 틀렸습니다.');
        } else {
          alert('존재하지 않는 아이디입니다.');
        }
      });
  };

  //state 로그인
  const [form, setForm] = useState({
    id: '',
    pw: '',
  });

  const setFormValue = event => {
    setForm(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  //컴포넌트는 계속 setFormValue 함수가 실행됨에 따라 계속 재렌더링 되므로,
  //굳이 isBtnDisabled에 useState를 써줄 필요는 없다.
  const isBtnDisabled = !(form.id.includes('@') && form.pw.length > 7);

  //렌더링 하는 곳
  return (
    <div className="Login">
      <main className="main1">
        <div className="login-container">
          <section>
            <header>Westagram</header>
          </section>
          <section>
            <input
              className="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={form.id}
              onChange={setFormValue}
              name="id"
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              value={form.pw}
              onChange={setFormValue}
              name="pw"
            />
            <button
              className="submit"
              disabled={isBtnDisabled}
              onClick={validation}
            >
              로그인
            </button>
          </section>
          <section>
            <div className="orWrapper">
              <span>또는</span>
            </div>

            <div className="headbook">
              <FaFacebookSquare size="20px" />
              headbook으로 로그인 하기
            </div>
            <div className="forgotPassword">비밀번호를 잊으셨나요?</div>
          </section>
        </div>
        <div className="footer">
          <section>
            계정이 없으신가요?
            <span>가입하기</span>
          </section>
          <section>
            <div>앱을 다운로드 하세요</div>
            <div className="appbadgeContainer">
              <img
                src="/images/seunghyunKark/Appstore1.png"
                alt="Appstore Badge"
              />
              <img
                src="/images/seunghyunKark/Appstore2.png"
                alt="Appstore Badge"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
