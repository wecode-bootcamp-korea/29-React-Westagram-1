import React from 'react';
import './PostedComment.scss';
import { FaRegHeart } from 'react-icons/fa';

function PostedComments(props) {
  return (
    <li className="postedComment">
      <div className="commentText">
        <a href=""> {props.userName} </a>
        <span> {props.content} </span>
      </div>
      <FaRegHeart className="commentHeart" size="15px" />
    </li>
  );
}

export default PostedComments;
