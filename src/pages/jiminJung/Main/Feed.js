import React from 'react';
import './Feed.scss';

import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaRegBookmark,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

import User from './User';
import Comments from './Comments';

function Feed(props) {
  return (
    <div class="feed">
      <div class="feedUserBar">
        <User
          imgClassname="feedUserImg"
          imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          imgAlt="userimg"
          name="jiiiiiiiiiimiiiiiiiiii"
        />
        <div class="feedMore">···</div>
      </div>
      <div class="feedImgWrapper">
        <img className="feedImg" src={props.feedImgUrl} alt="" />
      </div>
      <div class="feedBottom">
        <div class="feedLoves">
          <div className="icons">
            <div class="leftIcons">
              <FaHeart display="none" size="20px" /> <FaRegHeart size="20px" />{' '}
              <FaRegComment size="20px" />
              <FiSend size="20px" />
            </div>
            <div className="bookMark">
              <FaRegBookmark size="20px" />
            </div>
          </div>
          <div class="whoLoves">
            <User
              imgClassname="feedUserImg"
              imgUrl="https://images.pexels.com/photos/7589278/pexels-photo-7589278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              imgAlt="userimg"
              name="jiiiiiiiiiimiiiiiiiiii"
            />
            <p>님 외 87명이 좋아합니다</p>
          </div>
        </div>
        <div class="feedText">
          <div class="feedTextWrite">
            <a href="/">{props.feedUserName}</a>
            <p>{props.feedContent}</p>
          </div>
        </div>
        <Comments />
      </div>
    </div>
  );
}

export default Feed;
