import React, { useState } from 'react';
import Comment from './Comment';
import './Comments.scss';
import { FaRegHeart } from 'react-icons/fa';

function Comments({ postedList }) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleComment = e => {
    setComment(e.target.value);
  };
  const addComment = c => {
    setCommentList(commentList => [...commentList, c]);
  };
  const registerComment = () => {
    addComment(comment);
  };

  return (
    <>
      <ul>
        {postedList.map(posted => (
          <li className="postedComment" key={posted.id}>
            <div className="commentText">
              <a href="/"> {posted.userName} </a>
              <span> {posted.content} </span>
            </div>
            <FaRegHeart className="commentHeart" size="15px" />
          </li>
        ))}
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
