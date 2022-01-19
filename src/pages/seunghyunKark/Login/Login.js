import React, { useState } from 'react';
import './Login.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';

function Login(props) {
  //useNavigate의 함수
  const navigate = useNavigate();

  const validation = () => {
    fetch('http://10.58.2.189:8000/login/', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'INVALID_EMAIL') {
          alert('존재하지 않는 아이디입니다.');
        } else if (res.message === 'INVALID_PASSWORD') {
          alert('비밀번호가 틀렸습니다.');
        } else {
          navigate('/main-seunghyunKark');
        }
      });
  };

  //state 로그인
  const [idValue, setIdValue] = useState('');
  const handleIdInput = ({ target }) => setIdValue(target.value);

  const [pwValue, setPwValue] = useState('');
  const handlePwInput = ({ target }) => {
    setPwValue(target.value);
    if (idValue.includes('@') && pwValue.length > 6) {
      setOpa({ opacity: 1 });
    } else {
      setOpa({ opacity: 0.5 });
    }
  };

  const [opa, setOpa] = useState({ opacity: 0.5 });

  //렌더링 하는 곳
  return (
    <div className="body">
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
              value={idValue}
              onChange={handleIdInput}
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              value={pwValue}
              onChange={handlePwInput}
            />
            <button className="submit" style={opa} onClick={validation}>
              로그인
            </button>
          </section>
          <section>
            <div>
              <div className="or">또는</div>
            </div>

            <div>
              <FaFacebookSquare />
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
