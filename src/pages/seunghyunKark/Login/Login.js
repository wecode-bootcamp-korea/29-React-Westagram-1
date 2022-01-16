import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  //useNavigate의 함수
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seunghyunKark');
  };

  //state, props를 이용한 로그인 함수
  const [idValue, setIdValue] = useState();
  const handleIdInput = ({ target }) => setIdValue(target.value);

  const [pwValue, setPwValue] = useState();
  const handlePwInput = ({ target }) => setPwValue(target.value);
  /*
  const validation = () => {
    const id = document.querySelector('.id');
    const password = document.querySelector('.password');
    const submit = document.querySelector('.submit');

    if (id.value.includes('@') && password.value.length > 7) {
      submit.disabled = false;
      submit.style.opacity = 1;
    } else {
      submit.disabled = true;
      submit.style.opacity = 0.5;
    }
  };
  function handleIdInput(props)=>{
  }
  */
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
              onChange={handleIdInput}
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
            <input
              className="submit"
              type="submit"
              value="로그인"
              onClick={goToMain}
            />
          </section>
          <section>
            <div>또는</div>
            <div>headbook으로 로그인 하기</div>
            <div class="forgotPassword">비밀번호를 잊으셨나요?</div>
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
