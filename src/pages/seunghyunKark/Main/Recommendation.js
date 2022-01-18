import React from 'react';
import { recInfo } from './recInfo';

function Recommendation(props) {
  return (
    <section className="recommendation">
      <div className="recommendation-header bold">
        <div>회원님을 위한 추천</div>
        <div className="view-all">모두 보기</div>
      </div>
      {recInfo.map(info => {
        return (
          <div className="recommendation-stack" Key={info.id}>
            <div className="recommended-users">
              <div className="aside-profile-img-container">
                <img src={info.src} alt="profile" />
              </div>
              <div className="profile-info">
                <div className="bold">{info.user}</div>
                <div className="caption">회원님을 팔로우합니다</div>
              </div>
            </div>
            <div className="follow-button bold">팔로우</div>
          </div>
        );
      })}
    </section>
  );
}

export default Recommendation;
