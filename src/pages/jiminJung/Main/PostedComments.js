import React from 'react';
import './PostedComment.scss';
import { FaRegHeart } from 'react-icons/fa';

function PostedComments({ userName, content }) {
  return (
    <li className="postedComment">
      <div className="commentText">
        <a href="/"> {userName} </a>
        <span> {content} </span>
      </div>
      <FaRegHeart className="commentHeart" size="15px" />
    </li>
  );
}

export default PostedComments;
