import React from 'react';
import './Comment.scss';

function Comment({ comments }) {
  return (
    <ul className="comment-hidden">
      {comments.map(comments => (
        <li key={comments.id} className="comment-hidden">
          <span className="comment-id"> {comments.userName}</span>
          {comments.content}
        </li>
      ))}
    </ul>
  );
}

export default Comment;
