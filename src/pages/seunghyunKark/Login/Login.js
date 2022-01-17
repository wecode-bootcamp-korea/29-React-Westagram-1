import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  //useNavigate의 함수
  const navigate = useNavigate();

  const goToMain = () => {
    if (idValue.includes('@') && pwValue.length > 7) {
      navigate('/main-seunghyunKark');
      setOpa({ opacity: 1 });
    } else if (!idValue.includes('@') && pwValue.length > 7) {
      alert('ID에는 @가 포함되어야 합니다');
    } else if (idValue.includes('@') && pwValue.length < 8) {
      alert('PW는 8글자 이상이어야 합니다');
    } else {
      alert('ID에는 @가 포함되어야 하며, PW는 8글자 이상이어야 합니다');
    }
  };

  //state 로그인
  const [idValue, setIdValue] = useState('');
  const handleIdInput = ({ target }) => setIdValue(target.value);

  const [pwValue, setPwValue] = useState('');
  const handlePwInput = ({ target }) => setPwValue(target.value);

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
            <input
              className="submit"
              type="submit"
              value="로그인"
              onClick={goToMain}
              style={opa}
            />
          </section>
          <section>
            <div>또는</div>
            <div>headbook으로 로그인 하기</div>
            <div className="forgotPassword">비밀번호를 잊으셨나요?</div>
          </section>
        </div>
        <div>
          <section>
            계정이 없으신가요?
            <button>가입하기</button>
          </section>
          <section>
            앱을 다운로드 하세요
            <div>
              <img />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
