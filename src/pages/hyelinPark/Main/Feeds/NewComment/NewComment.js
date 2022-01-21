import React from 'react';

const NewComment = ({ comment, onRemove }) => {
  return (
    <li id="jinxsik">
      <span className="userName">{comment.userName}</span>
      <span className="commentValue">{comment.comment}</span>
      <button className="delete" onClick={() => onRemove(comment.id)}>
        X
      </button>
    </li>
  );
};

export default NewComment;
