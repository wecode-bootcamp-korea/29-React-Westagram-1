import Nav from '../../../components/Nav/Nav';
import React from 'react';
import '../Main/Main.scss';
import { useState, useEffect } from 'react';
import Feed from './Feed';

export const Main = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedList.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setFeedData([...data]);
      });
  }, []);

  return (
    <div>
      <Nav />
      <main id="ContentsMain">
        <div className="feeds">
          <div id="story-wrap">
            <ul className="story-user-list">
              <li className="story-user">
                <div className="story-tum story-tum01"></div>
                <span className="user-id">chick</span>
              </li>
              <li className="story-user">
                <div className="story-tum story-tum02"></div>
                <span className="user-id">deer</span>
              </li>
              <li className="story-user">
                <div className="story-tum story-tum03"></div>
                <span className="user-id">dolphin</span>
              </li>
              <li className="story-user">
                <div className="story-tum story-tum04"></div>
                <span className="user-id">chicken</span>
              </li>
              <li className="story-user">
                <div className="story-tum story-tum05"></div>
                <span className="user-id">eagle</span>
              </li>
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
              likeCount={el.likeCount}
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
                <p>raccoons</p>
                <p>너구리</p>
              </div>
              <button type="button" className="change-btn">
                전환
              </button>
            </div>
            <div className="suggestion-wrap">
              <div className="suggestion-header">
                <span>회원님을 위한 추천</span>
                <a href="#">모두 보기</a>
              </div>
              <div className="suggestion-list-wrap">
                <div className="suggestion-list">
                  <div className="suggestion-tum-wrap">
                    <div className="suggestion-tum-img"></div>
                  </div>
                  <div className="suggestion-user-wrap">
                    <p>elephant</p>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <button type="button" className="follow-button">
                    팔로우
                  </button>
                </div>
                <div className="suggestion-list">
                  <div className="suggestion-tum-wrap">
                    <div className="suggestion-tum-img"></div>
                  </div>
                  <div className="suggestion-user-wrap">
                    <p>lion</p>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <button type="button" className="follow-button">
                    팔로우
                  </button>
                </div>
                <div className="suggestion-list">
                  <div className="suggestion-tum-wrap">
                    <div className="suggestion-tum-img"></div>
                  </div>
                  <div className="suggestion-user-wrap">
                    <p>rabit</p>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <button type="button" className="follow-button">
                    팔로우
                  </button>
                </div>
                <div className="suggestion-list">
                  <div className="suggestion-tum-wrap">
                    <div className="suggestion-tum-img"></div>
                  </div>
                  <div className="suggestion-user-wrap">
                    <p>tiger</p>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <button type="button" className="follow-button">
                    팔로우
                  </button>
                </div>
                <div className="suggestion-list">
                  <div className="suggestion-tum-wrap">
                    <div className="suggestion-tum-img"></div>
                  </div>
                  <div className="suggestion-user-wrap">
                    <p>weasel</p>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <button type="button" className="follow-button">
                    팔로우
                  </button>
                </div>
              </div>
            </div>
            <div className="right-foo">
              <ul>
                <li>
                  <a href="#">소개</a>
                </li>
                <li>
                  <a href="#">도움말</a>
                </li>
                <li>
                  <a href="#">홍보 센터</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
                <li>
                  <a href="#">채용 정보</a>
                </li>
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">약관</a>
                </li>
                <li>
                  <a href="#">위치</a>
                </li>
                <li>
                  <a href="#">인기 계정</a>
                </li>
                <li>
                  <a href="#">해시태그</a>
                </li>
                <li>
                  <a href="#">언어</a>
                </li>
              </ul>
              <span className="copy">© 2022 INSTAGRAM FROM META</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
