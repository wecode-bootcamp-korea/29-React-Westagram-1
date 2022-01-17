import React, { useState, useEffect } from 'react';

import Comment from './Comment';

function Comments() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/dataJimn/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <>
      <ul>
        {commentList.map(x => {
          return <Comment userName={x.userName} content={x.content} />;
        })}
      </ul>
      <div className="writeComment">
        <input type="text" placeholder="댓글 달기..." />
        <button className="commentBtn">게시</button>
      </div>
    </>
  );
}

export default Comments;
