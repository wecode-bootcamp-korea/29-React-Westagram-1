import React from 'react';

function Comment(props) {
  return (
    <ul className="comment-hidden">
      {props.commentList.map((comment, index) => (
        <li key={index} className="comment-hidden">
          <span className="bold"> vittoria.kark</span> {comment}
        </li>
      ))}
    </ul>
  );
}

export default Comment;
