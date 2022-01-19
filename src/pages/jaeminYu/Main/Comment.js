import React from 'react';
import { useState } from 'react';

const Comment = props => {
  const [commentLikeBtn, setCommentLikeBtn] = useState('icon-mini-heart');

  return (
    <li className="comment-list-ad">
      <a href="#" className="comment-user">
        {props.nickname}
      </a>
      <span className="user-comment">{props.description}</span>
      <span
        className={commentLikeBtn}
        onClick={() =>
          commentLikeBtn === 'icon-mini-heart'
            ? setCommentLikeBtn('icon-mini-heart-on')
            : setCommentLikeBtn('icon-mini-heart')
        }
      ></span>
      <span
        className="delete-btn"
        onClick={() => props.DeleteComment(props.id)}
      >
        X
      </span>
    </li>
  );
};

export default Comment;
