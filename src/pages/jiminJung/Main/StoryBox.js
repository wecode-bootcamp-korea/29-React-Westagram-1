import React from 'react';

import UserDetail from './UserDetail';

import './StoryBox.scss';

function StoryBox() {
  return (
    <div class="storyBox">
      <div class="storyTitle">
        <p>스토리</p>
        <div>
          <a href="모두 보기">모두 보기</a>
        </div>
      </div>
      <div class="stories">
        <UserDetail
          imgClassName="uD"
          imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="Jungjimin"
          info="16분 전"
        />
        <UserDetail
          imgClassName="uD"
          imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="Jungjimin"
          info="16분 전"
        />
        <UserDetail
          imgClassName="uD"
          imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="Jungjimin"
          info="16분 전"
        />
        <UserDetail
          imgClassName="uD"
          imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="Jungjimin"
          info="16분 전"
        />
      </div>
    </div>
  );
}

export default StoryBox;
