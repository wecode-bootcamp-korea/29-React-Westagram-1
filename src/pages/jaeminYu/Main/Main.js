import React from 'react';
import { useState, useEffect } from 'react';

import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';

import '../Main/Main.scss';

export const Main = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/feedList.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setFeedData([...data]);
      });
  }, []);

  return (
    <div>
      <Nav />
      <main className="ContentsMain">
        <div className="feeds">
          <div className="story-wrap">
            <ul className="story-user-list">
              {STORY_USER_LIST.map(el => (
                <li className="story-user" key={el.id}>
                  <div
                    className="story-tum"
                    style={{
                      backgroundImage: [el.url],
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top',
                    }}
                  />
                  <span className="user-id">{el.name}</span>
                </li>
              ))}
            </ul>
          </div>
          {feedData.map((el, index) => (
            <Feed
              key={index}
              nickname={el.nickname}
              location={el.location}
              miniThumbnail={el.miniThumbnail}
              img={el.img}
              description={el.description}
              freindThumbnail={el.freindThumbnail}
              freindId={el.freindId}
            />
          ))}
        </div>
        <div className="main-right">
          <div className="main-fixed-space">
            <div className="login-user">
              <div className="login-user-tum-wrap">
                <div className="login-user-tum-img"></div>
              </div>
              <div className="nickname-wrap">
                <p className="login-user-id-eng">raccoons</p>
                <p className="login-user-id-kor">너구리</p>
              </div>
              <button type="button" className="change-btn">
                전환
              </button>
            </div>
            <div className="suggestion-wrap">
              <div className="suggestion-header">
                <span className="suggestion-user">회원님을 위한 추천</span>
                <a href="#" className="suggestion-all">
                  모두 보기
                </a>
              </div>
              <div className="suggestion-list-wrap">
                {RECOMMEND_FOR_USER_LIST.map(el => (
                  <div className="suggestion-list" key={el.id}>
                    <div className="suggestion-tum-wrap">
                      <img src={el.url} className="suggestion-tum-img" />
                    </div>
                    <div className="suggestion-user-wrap">
                      <p className="suggestion-mini-user">{el.name}</p>
                      <p className="recommend-for-members">
                        회원님을 위한 추천
                      </p>
                    </div>
                    <button type="button" className="follow-button">
                      팔로우
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="right-foo">
              <ul>
                {MAIN_FOOTER_LIST_ELEMENT.map(el => (
                  <li key={el.id}>
                    <a href="#">{el.list}</a>
                  </li>
                ))}
              </ul>
              <span className="copy">© 2022 INSTAGRAM FROM META</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// 상수 데이터 1 : 푸터 리스트
const MAIN_FOOTER_LIST_ELEMENT = [
  {
    id: 1,
    list: '소개',
  },
  {
    id: 2,
    list: '도움말',
  },
  {
    id: 3,
    list: '홍보 센터',
  },
  {
    id: 4,
    list: 'API',
  },
  {
    id: 5,
    list: '채용 정보',
  },
  {
    id: 6,
    list: '개인정보처리방침',
  },
  {
    id: 7,
    list: '약관',
  },
  {
    id: 8,
    list: '위치',
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
    list: '언어',
  },
];

// 상수 데이터 2 : 상단 피드 친구 리스트
const STORY_USER_LIST = [
  {
    id: 1,
    url: 'url(/images/jaeminYu/user_chick.png)',
    name: 'chick',
  },
  {
    id: 2,
    url: 'url(/images/jaeminYu/user_deer.jpeg)',
    name: 'deer',
  },
  {
    id: 3,
    url: 'url(/images/jaeminYu/user_dolphin.jpeg)',
    name: 'dolphin',
  },
  {
    id: 4,
    url: 'url(/images/jaeminYu/user_chicken.jpeg)',
    name: 'chicken',
  },
  {
    id: 5,
    url: 'url(/images/jaeminYu/user_eagle.jpeg)',
    name: 'eagle',
  },
  {
    id: 6,
    url: 'url(/images/jaeminYu/user_zebra.jpeg)',
    name: 'zebra',
  },
  {
    id: 7,
    url: 'url(/images/jaeminYu/user_weasel.jpeg)',
    name: 'weasel',
  },
  {
    id: 8,
    url: 'url(/images/jaeminYu/user_tiger.jpeg)',
    name: 'tiger',
  },
  {
    id: 9,
    url: 'url(/images/jaeminYu/user_rabit.jpeg)',
    name: 'rabit',
  },
];

// 상수 데이터 3 : 회원님을 위한 추천 리스트
const RECOMMEND_FOR_USER_LIST = [
  {
    id: 1,
    url: '/images/jaeminYu/user_elephant.jpeg',
    name: 'elephant',
  },
  {
    id: 2,
    url: '/images/jaeminYu/user_lion.jpeg',
    name: 'lion',
  },
  {
    id: 3,
    url: '/images/jaeminYu/user_rabit.jpeg',
    name: 'rabit',
  },
  {
    id: 4,
    url: '/images/jaeminYu/user_tiger.jpeg',
    name: 'tiger',
  },
  {
    id: 5,
    url: '/images/jaeminYu/user_weasel.jpeg',
    name: 'weasel',
  },
];

export default Main;
