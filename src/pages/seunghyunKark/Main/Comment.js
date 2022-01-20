import React from 'react';
import './Comment.scss';

function Comment({ comments }) {
  return (
    <ul className="comment-hidden">
      {comments.map(data => (
        <li key={data.id} className="comment-hidden">
          <span className="comment-id"> {data.userName}</span>
          {data.content}
        </li>
      ))}
    </ul>
  );
}

export default Comment;
