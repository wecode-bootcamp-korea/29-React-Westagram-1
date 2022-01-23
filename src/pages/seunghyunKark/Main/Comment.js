import React from 'react';
import './Comment.scss';

function Comment({ comments }) {
  return (
    <ul className="comment-hidden">
      {comments.map(comment => (
        <li key={comment.id} className="comment-hidden">
          <span className="comment-id"> {comment.userName}</span>
          {comment.content}
        </li>
      ))}
    </ul>
  );
}

export default Comment;