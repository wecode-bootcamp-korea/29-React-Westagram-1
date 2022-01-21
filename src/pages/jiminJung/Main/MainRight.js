import React from 'react';

import './MainRight.scss';

import UserDetail from './UserDetail';
import RecommendBox from './RecommendBox';
import StoryBox from './StoryBox';

function MainRight() {
  return (
    <div class="mainRight">
      <UserDetail
        imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        name="jimin"
        info="유저 설명"
      />
      <StoryBox />
      <RecommendBox />
      <div class="footer">
        <p>
          Instagram 소개 도움말 홍보 센터 API 채용 개인정보처리방침약관 위치
          인기 계정 해시태그 언어
          <br />
          <br />© 2022 INSTAGRAM FROM META
        </p>
      </div>
    </div>
  );
}

export default MainRight;
