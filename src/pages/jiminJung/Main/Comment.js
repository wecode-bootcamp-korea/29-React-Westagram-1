import React from 'react';
import './Comment.scss';
import { FaRegHeart } from 'react-icons/fa';

function Comment({ commentList }) {
  return (
    <>
      {commentList.map(comment => (
        <li className="newComment" key={comment.id}>
          <div className="newCommentText">
            <a href="/">userName</a>
            <span>{comment}</span>
          </div>
          <FaRegHeart className="commentHeart" size="15px" />
        </li>
      ))}
    </>
  );
}

export default Comment;
