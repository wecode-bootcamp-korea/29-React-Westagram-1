import React from 'react';

const MainRight = () => {
  return (
    <>
      <div className="main_right">
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

        <div className="StoryBox">
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
      </div>
    </>
  );
};

export default MainRight;
