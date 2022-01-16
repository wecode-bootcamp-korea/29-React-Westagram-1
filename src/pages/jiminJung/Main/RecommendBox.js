import React from 'react';

import UserDetail from './UserDetail';

import './RecommendBox.scss';

function RecommendBox() {
  return (
    <div class="recommendBox">
      <div class="recommendTitle">
        <p>회원님을 위한 추천</p>
        <div>
          <a href="모두 보기">모두 보기</a>
        </div>
      </div>
      <div class="recommends">
        <UserDetail
          imgClassName="uD"
          imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="jimin"
          info="wow wow"
        />
        <UserDetail
          imgClassName="uD"
          imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="jimin"
          info="wow wow"
        />
        <UserDetail
          imgClassName="uD"
          imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="jimin"
          info="wow wow"
        />
        <UserDetail
          imgClassName="uD"
          imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="jimin"
          info="wow wow"
        />
      </div>
    </div>
  );
}

export default RecommendBox;
