import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';
import { useState } from 'react';

export const Login = () => {
  const [idInputValue, setIdInputValue] = useState('');
  const [pwInputValue, setPwInputValue] = useState('');
  const [loginBtn, setLoginBtn] = useState('btnInActive');

  // Event : Navigation
  // 추가사항 1) 로그인 버튼 활성화 됬을 때만 url이 입력되도록 변경
  const nav = useNavigate();
  const goToHome = () => {
    if (loginBtn === 'btnActive') nav('/main-jaeminYu');
  };

  // Mission 1) Login | 사용자 입력 데이터 저장
  const IdInputHandler = event => {
    setIdInputValue(event.target.value);
  };

  const PwInputHandler = event => {
    setPwInputValue(event.target.value);
  };

  // Mission 2) Login | 로그인 버튼 활성화 (validation)
  const LoginBtnHandler = () => {
    idInputValue.includes('@') && pwInputValue.length > 4
      ? setLoginBtn('btnActive')
      : setLoginBtn('btnInActive');
  };

  const FetchHandler = () => {
    fetch('http://10.58.3.67:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: idInputValue,
        password: pwInputValue,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (
          result.message === 'USER_ALREADY_EXIST' ||
          result.message === 'INVALID_FORMAT'
        ) {
          alert('아이디와 비밀번호를 확인해주세요.');
        } else if (result.message === 'SUCCESS') {
          goToHome();
        }
      });
  };

  return (
    <div>
      <main id="LoginMain">
        <aside id="aside">
          <div id="phone-wrap">
            <div id="img-wrap">
              <img
                src="/images/jaeminYu/phoneFade01.jpeg"
                className="phone-img phone-img-root"
                alt="img"
              />
              <img
                src="/images/phoneFade02.jpeg"
                className="phone-img"
                alt="img"
              />
              <img
                src="/images/phoneFade03.jpeg"
                className="phone-img"
                alt="img"
              />
              <img
                src="/images/phoneFade04.jpeg"
                className="phone-img"
                alt="img"
              />
              <img
                src="/images/phoneFade05.jpeg"
                className="phone-img"
                alt="img"
              />
            </div>
          </div>
        </aside>
        <section id="section">
          <div id="login-wrap">
            <div id="login-box">
              <div id="logo" className="img-sprite"></div>
              <div id="input-wrap">
                <label className="user-loing-txt">
                  <input
                    id="inputId"
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    className={'write-box id-write-box'}
                    onChange={IdInputHandler}
                    onKeyUp={LoginBtnHandler}
                  />
                </label>
                <label className="user-loing-txt">
                  <input
                    id="inputPw"
                    placeholder="비밀번호"
                    type="password"
                    className="write-box pw-write-box"
                    onChange={PwInputHandler}
                    onKeyUp={LoginBtnHandler}
                  />
                </label>
                <label className="user-loing-txt">
                  <button
                    id="login-btn"
                    className={loginBtn}
                    onClick={FetchHandler}
                  >
                    로그인
                  </button>
                </label>
              </div>
            </div>
            <div id="boundary-wrap">
              <div id="boundary-line"></div>
              <span id="or">또는</span>
              <div id="boundary-line"></div>
            </div>
            <div id="find">
              <div id="find-facebook">
                <span className="facebook-icon img-sprite"></span>
                <span className="login-txt">Facebook으로 로그인</span>
              </div>
              <p id="find-password">비밀번호를 잊으셨나요?</p>
            </div>
          </div>
          <div id="join-wrap">
            <span>계정이 없으신가요?</span>
            <a href="#">가입하기</a>
          </div>
          <div id="download-wrap">
            <p>앱을 다운로드하세요.</p>
            <div id="btn-wrap">
              <a href="#">
                <img src="/images/jaeminYu/appStore.png" alt="app-store" />
              </a>
              <a href="#">
                <img src="/images/jaeminYu/googlePlay.png" alt="google-play" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
        <ul>
          <li>
            <a href="#">Meta</a>
          </li>
          <li>
            <a href="#">소개</a>
          </li>
          <li>
            <a href="#">블로그</a>
          </li>
          <li>
            <a href="#">채용 정보</a>
          </li>
          <li>
            <a href="#">도움말</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">개인정보처리방침</a>
          </li>
          <li>
            <a href="#">약관</a>
          </li>
          <li>
            <a href="#">인기 계정</a>
          </li>
          <li>
            <a href="#">해시태그</a>
          </li>
          <li>
            <a href="#">위치</a>
          </li>
          <li>
            <a href="#">Instagram Life</a>
          </li>
          <li>
            <a href="#">뷰티</a>
          </li>
          <li>
            <a href="#">댄스</a>
          </li>
          <li>
            <a href="#">피트니스</a>
          </li>
          <li>
            <a href="#">식음료</a>
          </li>
          <li>
            <a href="#">집 및 정원</a>
          </li>
          <li>
            <a href="#">음악</a>
          </li>
          <li>
            <a href="#">시각 예술</a>
          </li>
        </ul>
        <div id="copyright">
          <select name="languege" id="languege">
            <option value="korean">한국어</option>
            <option value="english">English</option>
            <option value="japanese">日本語</option>
            <option value="chinese">中国人</option>
          </select>
          <span>© 2022 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default Login;
