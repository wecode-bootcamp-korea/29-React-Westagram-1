import React from 'react';
import {
  FaHeart,
  FaComment,
  FaPaperPlane,
  FaBookmark,
  FaSmile,
} from 'react-icons/fa';
import Comment from './Comment';
import { useState, useEffect } from 'react';

let comment_id = 1;

const Feed = props => {
  const [userComment, setUserComment] = useState('');
  const [postBtn, setPostBtn] = useState('postingBtnInActive');
  const [listElement, setListElement] = useState([]); // Event 3-1 : 댓글 추가 내용을 담기 위한 빈 배열 생성
  const [moreBtn, setMoreBtn] = useState('desc-txt-hide');
  const [likeBtn, setLikeBtn] = useState(0);
  const [commnetCount, setCommnetCount] = useState(0);
  const [commentMore, setCommentMore] = useState(''); // 추가 기능 : 댓글 더보기 기능

  useEffect(() => {
    fetch('http://localhost:3000/data/commentList.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setListElement(data);
      });
  }, []);

  // Event 1 : input에 입력 되는 값 저장
  const CommnetLength = event => {
    setUserComment(event.target.value);
  };

  // Event 2 : input 입력 값이 0 을 초과하는 경우 버튼 활성화
  const CommnetBtnHandler = () => {
    userComment.length > 0
      ? setPostBtn('postingBtnActive')
      : setPostBtn('postingBtnInActive');
  };

  // Event 3 : 댓글 추가 (게시 글을 클릭하는 경우)
  function UploadComment() {
    if (userComment.length > 0) {
      const newComment = {
        id: comment_id,
        nickname: 'raccoons',
        location: '',
        miniThumbnail: '',
        img: '',
        description: userComment,
      };
      // Event 3-2 : 스프레드 문법으로 기존 배열(...listElement)을 유지하며 newComment 객체 추가
      setListElement([...listElement, newComment]);
      setUserComment('');
      // 추가 기능 : 댓글 갯수 카운트
      setCommnetCount(commnetCount + 1);
      comment_id += 1;
    }
  }

  // 추가 기능 : 댓글 삭제 (X버튼 클릭 할 경우)
  function DeleteComment(listId) {
    setListElement(listElement.filter(el => el.id !== listId));
    setCommnetCount(commnetCount - 1);
  }

  // Event 4 : 댓글 추가 (엔터를 누를 경우)
  const CommentEnter = event => {
    if (event.key === 'Enter' && userComment.length > 0) UploadComment();
  };

  // 추가 기능 : 더보기 버튼 클릭
  const moreBtnHandler = event => {
    setMoreBtn('desc-txt-show');
    event.target.style.display = 'none';
  };

  // 추가 기능 : 좋아요 버튼 클릭
  const likeBtnHandler = event => {
    event.preventDefault();
    setLikeBtn(likeBtn + 1);
  };

  return (
    <>
      <article id="article">
        <div className="article-header">
          <div className="article-thumbnail">
            <img src={props.miniThumbnail} alt="mini-thumnail" />
          </div>
          <div className="article-user-wrap">
            <p className="article-user">{props.nickname}</p>
            <p className="address">{props.location}</p>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="article-img">
          <img src={props.img} />
        </div>
        <div className="article-icon-wrap">
          <a href="#" className="icon icon-heart">
            <FaHeart className="far fa-heart" onClick={likeBtnHandler} />
          </a>
          <a href="#" className="icon icon-comment">
            <FaComment className="far fa-comment" />
          </a>
          <a href="#" className="icon icon-paper-plane">
            <FaPaperPlane className="far fa-paper-plane" />
          </a>
          <a href="#" className="icon icon-bookmark">
            <FaBookmark className="far fa-bookmark" />
          </a>
        </div>
        <div className="article-like">
          <img src={props.freindThumbnail} />
          <p>
            <span className="like-user">{props.freindId}</span>님{' '}
            <span className="like-total">
              외 <span className="like-counting">{likeBtn}</span>명
            </span>
            이 좋아합니다
          </p>
        </div>
        <div className="article-description">
          <div className="desc-header">
            <p className={moreBtn}>
              <a href="#" className="desc-user">
                {props.nickname}
              </a>
              {props.description}
            </p>
            <button
              type="button"
              className="desc-more-btn"
              onClick={moreBtnHandler}
            >
              더 보기
            </button>
          </div>
          <ul className="hashtag">
            <li>#오로라</li>
            <li>#하늘</li>
            <li>#북극</li>
            <li>#북극곰</li>
          </ul>
        </div>
        <div className="article-comment-record">
          <p
            className="comment-btn"
            onClick={() => setCommentMore('comment-list-more')}
          >
            댓글&nbsp;<span className="comment-counting">{commnetCount}</span>개
            모두 보기
          </p>
          <ul className={'comment-list' + ' ' + commentMore}>
            {/* Event 3-3 : 업데이트 된 listElement 배열을 map으로 돌린다. (Comment 자식 컴포넌트에 props 전달하여 내용 바꾸기) */}
            {listElement.map((el, index) => (
              <Comment
                key={index}
                id={el.id}
                nickname={el.nickname}
                description={el.description}
                DeleteComment={DeleteComment}
              />
            ))}
          </ul>
          <p className="comment_time">1일 전</p>
        </div>
        <div className="article-comment-posting">
          <button type="button" className="smile-button">
            <FaSmile className="far fa-smile" />
          </button>
          <input
            type="text"
            placeholder="댓글 달기..."
            className="posting-area"
            onChange={CommnetLength}
            onKeyUp={CommnetBtnHandler}
            value={userComment}
            onKeyPress={CommentEnter}
          />
          {/* Event 3-4 : input태그에 value 속성값에 userComment를 넣어주어 초기화 값을 적용시킨다. */}
          <button
            type="button"
            className={'posting-button' + ' ' + postBtn}
            onClick={UploadComment}
          >
            게시
          </button>
        </div>
      </article>
    </>
  );
};

export default Feed;
