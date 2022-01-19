import React from 'react';

import { FaRegHeart } from 'react-icons/fa';

function Comment({ commentList }) {
  return (
    <>
      {commentList.map(comment => (
        <li key={comment.index}>
          <a>userName</a>
          {comment}
        </li>
      ))}
    </>
  );
}

export default Comment;
