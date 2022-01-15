import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';
import { useState } from 'react';

export const Login = () => {
  const [idInputValue, setIdInputValue] = useState(null);
  const [pwInputValue, setPwInputValue] = useState(null);

  // event : navtgation
  const nav = useNavigate();
  const goToHome = () => {
    nav('/main-jaeminYu');
  };

  // event : vaule save
  const IdInputHandler = event => {
    setIdInputValue(event.target.value);
  };

  const PwInputHandler = event => {
    setPwInputValue(event.target.value);
  };

  // document.addEventListener('input', function () {
  //   const idBtn = document.getElementsByClassName('id-write-box')[0];
  //   const pwBtn = document.getElementsByClassName('pw-write-box')[0];
  //   const loginBtn = document.getElementById('login-btn');
  //   const idTxt = document.getElementsByClassName('id-action-txt')[0];
  //   const pwTxt = document.getElementsByClassName('pw-action-txt')[0];

  //   if (
  //     idBtn.value.length >= 1 &&
  //     pwBtn.value.length >= 5 &&
  //     idBtn.value.includes('@')
  //   ) {
  //     loginBtn.style.opacity = '1';
  //     loginBtn.style.cursor = 'pointer';
  //     loginBtn.style.pointerEvents = 'auto';
  //   } else {
  //     loginBtn.style.opacity = '0.5';
  //     loginBtn.style.cursor = 'default';
  //     loginBtn.style.pointerEvents = 'none';
  //   }

  //   const TxtAction = (btn, txt) =>
  //     btn.value.length >= 1 ? (txt.style.display = 'none') : false;
  //   TxtAction(idBtn, idTxt);
  //   TxtAction(pwBtn, pwTxt);
  // });

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
                  <span className="action-txt id-action-txt">
                    전화번호, 사용자 이름 또는 이메일
                  </span>
                  <input
                    id="inputId"
                    type="text"
                    className="write-box id-write-box"
                    onChange={IdInputHandler}
                  />
                </label>
                <label className="user-loing-txt">
                  <span className="action-txt pw-action-txt">비밀번호</span>
                  <input
                    id="inputPw"
                    type="password"
                    className="write-box pw-write-box"
                    onChange={PwInputHandler}
                  />
                </label>
                <label className="user-loing-txt">
                  <button id="login-btn" onClick={goToHome}>
                    로그인
                  </button>
                  {/* <Link to="/home" id="login-btn">로그인</Link> */}
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
