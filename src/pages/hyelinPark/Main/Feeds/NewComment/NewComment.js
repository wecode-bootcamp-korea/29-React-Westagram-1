import React from 'react';

const NewComment = props => {
  return (
    <li id="jinxsik">
      <span className="userName">jinxsik</span>
      <span className="commentValue">{props.comment}</span>
    </li>
  );
};

export default NewComment;
