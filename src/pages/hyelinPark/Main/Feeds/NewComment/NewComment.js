import React from 'react';

const NewComment = props => {
  return (
    <li id="jinxsik">
      <span className="userName">{props.comment.userName}</span>
      <span className="commentValue">{props.comment.comment}</span>
    </li>
  );
};

export default NewComment;
