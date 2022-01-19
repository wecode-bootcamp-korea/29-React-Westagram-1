import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import './Feed.scss';

import {
  FiMoreHorizontal,
  FiBookmark,
  FiHeart,
  FiSend,
  FiMessageCircle,
} from 'react-icons/fi';

function Feed() {
  const [comment, setComment] = useState('');
  const handleChange = ({ target }) => setComment(target.value);

  const [commentList, setCommentList] = useState([]);
  const addComment = event =>
    setCommentList(commentList => [...commentList, event]);

  const commentUpload = () => {
    addComment(comment);
    setComment('');
  };
  const commentEnterUpload = event => {
    if (event.key === 'Enter') {
      addComment(comment);
      setComment('');
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/seunghyunKark/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <section className="feed-section">
      <div className="feeds-profile">
        <div className="profile-container">
          <div className="feeds-profile-img">
            <img src="/images/seunghyunKark/profile7.jpg" alt="profile" />
          </div>
          <div>
            <p className="bold">iam.chiara.rossi</p>
            <p>Chiara Rossi</p>
          </div>
        </div>
        <FiMoreHorizontal className="fas fa-ellipsis-h" />
      </div>
      <img src="/images/seunghyunKark/feed1.JPG" alt="feed content" />
      <div className="interaction-bar">
        <div>
          <FiHeart className="far fa-heart" />
          <FiMessageCircle className="far fa-comment" />
          <FiSend className="far fa-paper-plane" />
        </div>
        <FiBookmark className="far fa-bookmark" />
      </div>
      <div className="feeds-like">
        <div className="like-profile-img">
          <img
            src="/images/seunghyunKark/profile2.jpeg"
            alt="person who liked this comment"
          />
        </div>
        <p>
          <span className="bold">jiheejeon.works</span>님{' '}
          <span class="bold">외 4명</span>이 좋아합니다
        </p>
      </div>
      <article className="feed-content">
        <span className="bold">iam.chiara.rossi</span> Tea time!
      </article>
      <div className="feeds-minute">59분 전</div>

      <Comment commentList={commentList} />

      <div className="comment-container">
        <input
          className="comment"
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={handleChange}
          onKeyUp={commentEnterUpload}
        />
        <button className="add-comment" onClick={commentUpload}>
          게시
        </button>
      </div>
    </section>
  );
}

export default Feed;
