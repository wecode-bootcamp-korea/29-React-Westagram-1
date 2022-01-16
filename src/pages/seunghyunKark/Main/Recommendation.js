import React, { Component } from 'react';

function Recommendation(props) {
  return (
    <section className="recommendation">
      <div className="recommendation-header bold">
        <div>회원님을 위한 추천</div>
        <div className="view-all">모두 보기</div>
      </div>
      <div className="recommendation-stack">
        <div className="recommended-users">
          <div className="aside-profile-img-container">
            <img
              src="/images/seunghyunKark/profile6.jpg"
              alt="profile picture"
            />
          </div>
          <div className="profile-info">
            <div className="bold">alohavittoria</div>
            <div className="caption">회원님을 팔로우합니다</div>
          </div>
        </div>
        <div className="follow-button bold">팔로우</div>
      </div>
      <div className="recommendation-stack">
        <div className="recommended-users">
          <div className="aside-profile-img-container">
            <img
              src="/images/seunghyunKark/profile5.jpeg"
              alt="profile picture"
            />
          </div>
          <div className="profile-info">
            <div className="bold">alohavittoria</div>
            <div className="caption">회원님을 팔로우합니다</div>
          </div>
        </div>
        <div className="follow-button bold">팔로우</div>
      </div>
      <div className="recommendation-stack">
        <div className="recommended-users">
          <div className="aside-profile-img-container">
            <img
              src="/images/seunghyunKark/profile4.jpeg"
              alt="profile picture"
            />
          </div>
          <div className="profile-info">
            <div className="bold">alohavittoria</div>
            <div className="caption">회원님을 팔로우합니다</div>
          </div>
        </div>
        <div className="follow-button bold">팔로우</div>
      </div>
    </section>
  );
}

export default Recommendation;
