import React, { Component } from 'react';

function Story(props) {
  return (
    <section className="story">
      <div>
        <div className="story-header bold">
          <div>스토리</div>
          <div className="view-all">모두 보기</div>
        </div>
        <div className="story-stack">
          <div className="aside-profile-img-container">
            <img
              src="/images/seunghyunKark/profile3.jpeg"
              alt="story profile picture"
            />
          </div>
          <div className="profile-info">
            <div className="bold">notyourcupoftea998</div>
            <div className="caption">3분 전</div>
          </div>
        </div>
        <div className="story-stack">
          <div className="aside-profile-img-container">
            <img
              src="/images/seunghyunKark/profile2.jpeg"
              alt="story profile picture"
            />
          </div>
          <div className="profile-info">
            <div className="bold">jihyun_park</div>
            <div className="caption">1시간 전</div>
          </div>
        </div>
        <div className="story-stack">
          <div className="aside-profile-img-container">
            <img
              src="/images/seunghyunKark/profile5.jpeg"
              alt="story profile picture"
            />
          </div>
          <div className="profile-info">
            <div className="bold">monstera.monday</div>
            <div className="caption">20시간 전</div>
          </div>
        </div>
        <div className="story-stack">
          <div className="aside-profile-img-container">
            <img
              src="/images/seunghyunKark/profile4.jpeg"
              alt="story profile picture"
            />
          </div>
          <div className="profile-info">
            <div className="bold">trattoria_buffala</div>
            <div className="caption">28분 전</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
