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

function Feed() {
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
        <img
          className="feedImg"
          src="https://images.pexels.com/photos/4321505/pexels-photo-4321505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
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
            <a href="/">username</a>
            <p>
              Come on let's go to bed we gonna rock the night away who did that
              to you, babe If you're not in the right mood to sleep now then,
              Come on, let's drink and have very unmanageable day
            </p>
          </div>
        </div>
        <div class="comments">
          <div className="comment">
            <div className="commentText">
              <a href="/">username</a>
              <p>바다다~</p>
            </div>
            <FaRegHeart className="commentHeart" size="15px" />
          </div>
        </div>
        <div className="writeComment">
          <input type="text" placeholder="댓글 달기..." />
          <button className="commentBtn">게시</button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
