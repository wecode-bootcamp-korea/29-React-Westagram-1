import React from 'react';

import { FaRegHeart } from 'react-icons/fa';

function PostedComments(props) {
  return (
    <li className="comment">
      <a href=""> {props.userName} </a>
      <span> {props.content} </span>
      <FaRegHeart className="commentHeart" size="15px" />
    </li>
  );
}

export default PostedComments;
