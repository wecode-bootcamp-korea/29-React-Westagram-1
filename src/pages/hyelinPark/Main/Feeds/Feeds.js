import React, { useState } from 'react';
import NewComment from './NewComment/NewComment';

const Feeds = props => {
  const [isValied, setIsValied] = useState('false');
  //input 값의 유효성 검사

  const [comment, setComment] = useState('');
  //input 값
  const [commentArray, setCommentArray] = useState([]);
  //댓글 배열을 저장

  const handleOnChange = e => {
    setComment(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray([...commentArray, comment]);
    setComment('');
  };

  return (
    <>
      <div className="feeds">
        <div className="user">
          <img
            src="/images/hyelinPark/1.jpeg"
            alt="myprofile_photo"
            className="myprofilePhoto"
          />
          <span className="userId">parkhyeluin</span>
        </div>
        <article className="photobox">
          <img
            src="/images/hyelinPark/9.jpeg"
            alt="feed_photo"
            className="feedPhoto"
          />
          <div className="photoIcon">
            <span id="heart">
              <i className="fa fa-heart-o"></i>
            </span>
            <img
              src="/images/hyelinPark/comment.png"
              alt="blah"
              className="chat"
            />
            <img
              src="/images/hyelinPark/share.png"
              alt="share"
              className="share"
            />
            <img
              src="/images/hyelinPark/bookmark.png"
              alt="save"
              className="save"
            />
          </div>
          <div className="inbox">
            <div className="like">
              <strong>parkhyeluin</strong>님 <strong>외 4명</strong>이
              좋아합니다
            </div>
            <span className="first" style={{ fontWeight: 'bold' }}>
              parkhyeluin
            </span>
            <span className="second">🇫🇷 IN PARIS</span>
            <span className="add">더 보기</span>
            <div className="time">54분 전</div>
            <ul>
              {commentArray.map((comment, index) => (
                <NewComment key={index} comment={comment} />
              ))}
            </ul>
          </div>
          <div className="commentContainer">
            <form className="commentWrap">
              <input
                value={comment}
                type="text"
                placeholder="댓글 달기..."
                className="comment"
                onKeyUp={event =>
                  event.target.value.length > 0
                    ? setIsValied(true)
                    : setIsValied(false)
                }
                onChange={handleOnChange}
              />
              <button
                onClick={onSubmit}
                id="btn_id"
                className="btn"
                disabled={isValied ? false : true}
              >
                게시
              </button>
            </form>
          </div>
        </article>
      </div>
    </>
  );
};

export default Feeds;
