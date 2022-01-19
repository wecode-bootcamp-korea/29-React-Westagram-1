import React, { useState, useEffect } from 'react';
import PostedComments from './PostedComments';
import Comment from './Comment';
import './Comments.scss';

function Comments() {
  const [comment, setComment] = useState('');
  const [postedList, setPostedList] = useState([]);
  const [commentList, setCommentList] = useState([]);

  const handleComment = e => {
    setComment(e.target.value);
  };
  const addComment = c => {
    setCommentList(commentList => [...commentList, c]);
  };
  const registerComment = () => {
    addComment(comment);
    setComment('');
  };

  useEffect(() => {
    fetch('http://localhost:3000/dataJimn/commentData.json')
      .then(res => res.json())
      .then(data => {
        setPostedList(data);
      });
  }, []);

  return (
    <>
      <ul>
        {postedList.map(x => {
          return <PostedComments userName={x.userName} content={x.content} />;
        })}
        <Comment commentList={commentList} />
      </ul>
      <div className="writeComment">
        <input
          type="text"
          placeholder="댓글 달기..."
          onChange={handleComment}
        />
        <button className="commentBtn" onClick={registerComment}>
          게시
        </button>
      </div>
    </>
  );
}

export default Comments;
