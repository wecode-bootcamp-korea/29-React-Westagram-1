import React from 'react';

import { FaRegHeart } from 'react-icons/fa';

function Comment({ commentList }) {
  return (
    <>
      {commentList.map((comment, index) => (
        <li key={index}>{comment} </li>
      ))}
    </>
  );
}

export default Comment;
