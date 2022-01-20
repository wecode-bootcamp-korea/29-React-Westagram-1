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
    setComment('');
  };

  return (
    <>
      <ul>
        {postedList.map(postedList => (
          <li className="postedComment" key={postedList.id}>
            <div className="commentText">
              <a href="/"> {postedList.userName} </a>
              <span> {postedList.content} </span>
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
