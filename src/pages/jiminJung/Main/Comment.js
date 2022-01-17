import React from 'react';

import { FaRegHeart } from 'react-icons/fa';

function Comment(props) {
  return (
    <li className="comment">
      {/* <div className="commentText"> */}
      <a href="">{props.userName}</a>
      <span>{props.content}</span>
      {/* </div> */}
      <FaRegHeart className="commentHeart" size="15px" />
    </li>
  );
}

export default Comment;
