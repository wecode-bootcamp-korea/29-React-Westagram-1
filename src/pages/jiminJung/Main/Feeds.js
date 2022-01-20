import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import User from './User';
import './Feeds.scss';
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaRegBookmark,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

function Feeds() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('/dataJimn/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  return (
    <div className="mainLeft">
      <div class="feeds">
        {feeds.map(x => {
          return (
            <div className="feed" key={x.id}>
              <div className="feedUserBar">
                <User userList={x.userList} />
                <div className="feedMore">···</div>
              </div>
              <div className="feedImgWrapper">
                <img className="feedImg" src={x.feedImgUrl} alt="" />
              </div>
              <div className="feedBottom">
                <div className="feedLoves">
                  <div className="icons">
                    <div className="leftIcons">
                      <FaHeart display="none" size="20px" />{' '}
                      <FaRegHeart size="20px" /> <FaRegComment size="20px" />
                      <FiSend size="20px" />
                    </div>
                    <div className="bookMark">
                      <FaRegBookmark size="20px" />
                    </div>
                  </div>
                  <div className="whoLoves">
                    <User userList={x.userList} />
                    <p>님 외 87명이 좋아합니다</p>
                  </div>
                </div>
                <div className="feedText">
                  <div className="feedTextWrite">
                    <a href="/">{x.feedUserName}</a>
                    <p>{x.feedContent}</p>
                  </div>
                </div>
                <Comments postedList={x.postedList} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feeds;
