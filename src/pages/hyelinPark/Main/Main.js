import React, { useState, useEffect } from 'react';
import './Main.scss';
import Feeds from '/Users/hyelinpark/Desktop/vvv/29-React-Westagram-1/src/pages/hyelinPark/Main/Feeds/Feeds.js';
import MainRight from './MainRight/MainRight';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/hyelinPark/feedData.json')
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
              console.log(feed);
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
        </div>
      </main>
    </div>
  );
};

export default Main;
