import React, { useState, useEffect } from 'react';
import './Main.scss';
import Feeds from '/Users/hyelinpark/Desktop/vvv/29-React-Westagram-1/src/pages/hyelinPark/Main/Feeds/Feeds.js';
import MainRight from './MainRight/MainRight';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data/hyelinPark/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="Main">
      <nav>
        <div className="navWrap">
          <div className="navLeft">
            <img
              className="logo"
              src="/images/hyelinPark/instagram-icon-vector-27.png"
              alt="instagram"
            />
            <span className="westagram">Westagram</span>
          </div>
          <input type="text" placeholder="검색" className="searchBar" />
          <span className="navIcon">
            <img
              src="/images/hyelinPark/explore.png"
              alt="nav_search"
              className="nav_1"
            />
            <img
              src="/images/hyelinPark/heart.png"
              alt="nav_heart"
              className="nav_2"
            />
            <img
              src="/images/hyelinPark/profile.png"
              alt="nav_mypage"
              className="nav_3"
            />
          </span>
        </div>
      </nav>

      <main>
        <div className="mainWrap">
          <div className="feedList">
            {feedList.map(feed => {
              return (
                <Feeds
                  key={feed.id}
                  userName={feed.userName}
                  userImg={feed.userImg}
                  feedImg={feed.feedImg}
                  feedContent={feed.feedContent}
                  commenttest={feed.comment}
                />
              );
            })}
          </div>
          <MainRight />
          {/* <div className="main_right">
            <div className="user_2">
              <img
                src="/images/hyelinPark/1.jpeg"
                alt="user_photo"
                className="main_right_profile_photo"
              />
              <span className="user_2_info">
                <p className="user_id2">parkhyeluin</p>
                <p className="userInfo"> Front-end Developer</p>
              </span>
            </div>
            <div className="box_1">
              <div className="allStory">
                <span className="story">스토리</span>
                <span className="allOfStory">모두 보기</span>
              </div>
              <div className="id_1">
                <img
                  src="/images/hyelinPark/2.jpeg"
                  alt="jinxsik"
                  className="imgJinxsik"
                />
                <span className="jinxsik">jinxsik</span>
              </div>
              <div className="id_2">
                <img
                  src="/images/hyelinPark/17.jpeg"
                  alt="trooioi"
                  className="imgTrooioi"
                />
                <span className="trooioi">trooioi</span>
              </div>
              <div className="id_3">
                <img
                  src="/images/hyelinPark/20.jpeg"
                  alt="insiruu"
                  className="imgInsiruu"
                />
                <span className="insiruu">insiruu</span>
              </div>
              <div className="id_4">
                <img
                  src="/images/hyelinPark/19.jpeg"
                  alt="bominkim"
                  className="imgBominkim"
                />
                <span className="bominkim">bominkim</span>
              </div>
            </div>

            <div className="box_2">
              <div className="allRecommend">
                <span className="recommend">회원님을 위한 추천</span>
                <span className="allOfRecommend">모두 보기</span>
              </div>
              <div className="re_id_1">
                <img
                  src="/images/hyelinPark/13.jpeg"
                  alt="googoogoo"
                  className="img_goo"
                />
                <span className="goo">googoogoo</span>
                <button className="follow">follow</button>
              </div>
              <div className="re_id_2">
                <img
                  src="/images/hyelinPark/11.jpeg"
                  alt="hoohoohoo"
                  className="img_hoo"
                />
                <span className="hoo">hoohoohoo</span>
                <button className="follow">follow</button>
              </div>
              <div className="re_id_3">
                <img
                  src="/images/hyelinPark/10.jpeg"
                  alt="poopoopoo"
                  className="img_poo"
                />
                <span className="poo">poopoopoo</span>
                <button className="follow">follow</button>
              </div>
            </div>
            <div className="box_aside">
              <p className="etc">
                westagram 정보 • 지원 • 홍보 센터 • API • 채용 정보 •
                개인정보처리방침 • 약관 • 디렉터리 • 프로필 • 해시태그 • 언어
              </p>
              <div className="date">© 2022 WESTAGRAM</div>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Main;
