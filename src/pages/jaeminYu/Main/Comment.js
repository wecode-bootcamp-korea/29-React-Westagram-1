import React from 'react';

const Comment = props => {
  return (
    <li className="comment-list-ad">
      <a href="#" className="comment-user">
        {props.nickname}
      </a>
      <span className="user-comment">{props.description}</span>
      <span className="icon-mini-heart"></span>
      <span className="delete-btn">X</span>
    </li>
  );
};

export default Comment;
