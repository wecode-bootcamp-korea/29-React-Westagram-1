import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Login/Login.scss';

export const Login = () => {
  const [loginInputValue, setLoginInputValue] = useState({
    id: '',
    pw: '',
  });
  const [btnAction, setBtnAction] = useState(null);

  // Mission 2) Login | 로그인 버튼 활성화 (validation)
  useEffect(() => {
    const loginBtnActive = !(
      loginInputValue.id.includes('@') && loginInputValue.pw.length > 4
    );
    setBtnAction(loginBtnActive);
  }, [loginInputValue.id, loginInputValue.pw]);

  // Mission 1) Login | 사용자 입력 데이터 저장
  const inputValueSaveHandler = event => {
    event.target.name === 'inputNameId'
      ? setLoginInputValue({ ...loginInputValue, id: event.target.value })
      : setLoginInputValue({ ...loginInputValue, pw: event.target.value });
  };

  // 추가 사항 ) Login | 백엔드 통신 성공 시 로그인 버튼에 메인페이지 URL 할당
  const nav = useNavigate();
  const goToHome = () => {
    nav('/main-jaeminYu');
  };

  const FetchHandler = () => {
    fetch('http://10.58.3.67:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: loginInputValue.id,
        password: loginInputValue.pw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (
          result.message === 'USER_ALREADY_EXIST' ||
          result.message === 'INVALID_FORMAT'
        ) {
          alert('아이디와 비밀번호를 확인해주세요.');
          return;
        }

        if (result.message === 'SUCCESS') goToHome();
      });
  };

  return (
    <div>
      <main className="LoginMain">
        <aside className="aside">
          <div className="phone-wrap">
            <div className="img-wrap">
              {MOBILE_IMG_LIST_ELEMENT.map(el => (
                <img
                  key={el.id}
                  src={el.src}
                  className={el.className}
                  alt={el.alt}
                />
              ))}
            </div>
          </div>
        </aside>
        <section className="login-input-section">
          <div className="login-wrap">
            <div className="login-box">
              <div className="insta-logo img-sprite"></div>
              <div className="input-wrap">
                {INPUT_FIX_DATA.map(el => (
                  <label className="user-loing-txt" key={el.id}>
                    <input
                      name={el.name}
                      type={el.type}
                      placeholder={el.placeholder}
                      className="write-box id-write-box"
                      onChange={inputValueSaveHandler}
                    />
                  </label>
                ))}

                <label className="user-loing-txt">
                  <button
                    className="login-btn"
                    onClick={FetchHandler}
                    disabled={btnAction}
                  >
                    로그인
                  </button>
                </label>
              </div>
            </div>
            <div className="boundary-wrap">
              <div className="boundary-line"></div>
              <span className="or">또는</span>
              <div className="boundary-line"></div>
            </div>
            <div className="find">
              <div className="find-facebook">
                <span className="facebook-icon img-sprite"></span>
                <span className="login-txt">Facebook으로 로그인</span>
              </div>
              <p className="find-password">비밀번호를 잊으셨나요?</p>
            </div>
          </div>
          <div className="join-wrap">
            <span className="no-id">계정이 없으신가요?</span>
            <a href="#" className="sign-up">
              가입하기
            </a>
          </div>
          <div className="download-wrap">
            <p className="app-download-info">앱을 다운로드하세요.</p>
            <div className="btn-wrap">
              <a href="#" className="logo_wrap">
                <img
                  src="/images/jaeminYu/appStore.png"
                  alt="app-store"
                  className="app-logo"
                />
              </a>
              <a href="#" className="logo_wrap">
                <img
                  src="/images/jaeminYu/googlePlay.png"
                  alt="google-play"
                  className="app-logo"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-list">
        <ul>
          {FOOTER_LIST_ELEMENT.map(el => (
            <li key={el.id}>
              <a href="#">{el.list}</a>
            </li>
          ))}
        </ul>
        <div className="copyright-wrap">
          <select name="languege" className="languege">
            {LANGUEGE_LIST_ELEMENT.map(el => (
              <option key={el.id} value={el.value}>
                {el.languege}
              </option>
            ))}
          </select>
          <span className="copyright">© 2022 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
};

// 상수 데이터 1 : 모바일 이미지
const MOBILE_IMG_LIST_ELEMENT = [
  {
    id: 1,
    src: '/images/jaeminYu/phoneFade01.jpeg',
    className: 'phone-img',
    alt: 'img',
  },
  {
    id: 2,
    src: '/images/phoneFade02.jpeg',
    className: 'phone-img',
    alt: 'img',
  },
  {
    id: 3,
    src: '/images/phoneFade03.jpeg',
    className: 'phone-img',
    alt: 'img',
  },
  {
    id: 4,
    src: '/images/phoneFade04.jpeg',
    className: 'phone-img',
    alt: 'img',
  },
  {
    id: 5,
    src: '/images/phoneFade05.jpeg',
    className: 'phone-img',
    alt: 'img',
  },
];

// 상수 데이터 2 : 언어 선택 옵션
const LANGUEGE_LIST_ELEMENT = [
  {
    id: 1,
    languege: '한국어',
    value: 'korean',
  },
  {
    id: 2,
    languege: 'English',
    value: 'english',
  },
  {
    id: 3,
    languege: '日本語',
    value: 'japanese',
  },
  {
    id: 4,
    languege: '中国人',
    value: 'chinese',
  },
];

// 상수 데이터 3 : 푸터 리스트
const FOOTER_LIST_ELEMENT = [
  {
    id: 1,
    list: 'Meta',
  },
  {
    id: 2,
    list: '소개',
  },
  {
    id: 3,
    list: '블로그',
  },
  {
    id: 4,
    list: '채용 정보',
  },
  {
    id: 5,
    list: '도움말',
  },
  {
    id: 6,
    list: 'API',
  },
  {
    id: 7,
    list: '개인정보처리방침',
  },
  {
    id: 8,
    list: '약관',
  },
  {
    id: 9,
    list: '인기 계정',
  },
  {
    id: 10,
    list: '해시태그',
  },
  {
    id: 11,
    list: '위치',
  },
  {
    id: 12,
    list: 'Instagram Life',
  },
  {
    id: 13,
    list: '뷰티',
  },
  {
    id: 14,
    list: '댄스',
  },
  {
    id: 15,
    list: '피트니스',
  },
  {
    id: 16,
    list: '식음료',
  },
  {
    id: 17,
    list: '집 및 정원',
  },
  {
    id: 18,
    list: '음악',
  },
  {
    id: 19,
    list: '시각 예술',
  },
];

// 상수 데이터 4 : 인풋 데이터
const INPUT_FIX_DATA = [
  {
    id: 1,
    name: 'inputNameId',
    type: 'text',
    placeholder: '전화번호, 사용자 이름 또는 이메일',
  },
  {
    id: 2,
    name: 'inputNamePw',
    type: 'password',
    placeholder: '비밀번호',
  },
];

export default Login;
