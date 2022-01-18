import React from 'react';
import './Comment.scss';

function Comment({ commentList }) {
  return (
    <ul className="comment-hidden">
      {commentList.map((comment, index) => (
        <li key={index} className="comment-hidden">
          <span className="comment-id"> vittoria.kark</span> {comment}
        </li>
      ))}
    </ul>
  );
}

export default Comment;
