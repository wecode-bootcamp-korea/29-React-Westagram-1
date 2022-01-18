import Nav from '../../../components/Nav/Nav';
import React from 'react';
import '../Main/Main.scss';
import {
  FaHeart,
  FaComment,
  FaPaperPlane,
  FaBookmark,
  FaSmile,
} from 'react-icons/fa';
import { useState } from 'react';
import Comment from './Comment';

export const Main = () => {
  const [userComment, setUserComment] = useState('');
  const [postBtn, setPostBtn] = useState('postingBtnInActive');
  const [listElement, setListElement] = useState([]); // Event 3-1 : 댓글 추가 내용을 담기 위한 빈 배열 생성

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
        id: '',
        nickname: 'raccoons',
        description: userComment,
      };
      // Event 3-2 : 스프레드 문법으로 기존 배열(listElement)을 유지하며 newComment 객체 추가
      setListElement([...listElement, newComment]);
      setUserComment('');
    }
  }

  // Event 4 : 댓글 추가 (엔터를 누를 경우)
  const CommentEnter = event => {
    if (event.key === 'Enter' && userComment.length > 0) UploadComment();
  };

  return (
    <div>
      <Nav />
      <main id="ContentsMain">
        <div className="feeds">
          <div id="story-wrap">
            <ul className="story-user-list">
              <li className="story-user">
                <div className="story-tum story-tum01"></div>
                <span className="user-id">chick</span>
              </li>
              <li className="story-user">
                <div className="story-tum story-tum02"></div>
                <span className="user-id">deer</span>
              </li>
              <li className="story-user">
                <div className="story-tum story-tum03"></div>
                <span className="user-id">dolphin</span>
              </li>
              <li className="story-user">
                <div className="story-tum story-tum04"></div>
                <span className="user-id">chicken</span>
              </li>
              <li className="story-user">
                <div className="story-tum story-tum05"></div>
                <span className="user-id">eagle</span>
              </li>
            </ul>
          </div>
          <article id="article">
            <div className="article-header">
              <div className="article-thumbnail"></div>
              <div className="article-user-wrap">
                <p className="article-user">raccoons</p>
                <p className="address">북극</p>
              </div>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="article-img">
              <div className="img"></div>
            </div>
            <div className="article-icon-wrap">
              <a href="#" className="icon icon-heart">
                <FaHeart className="far fa-heart" />
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
              <div className="like-thumbnail"></div>
              <p>
                <span className="like-user">tiger</span>님{' '}
                <span className="like-total">
                  외 <span className="like-counting">29</span>명
                </span>
                이 좋아합니다
              </p>
            </div>
            <div className="article-description">
              <div className="desc-header">
                <p className="desc-txt">
                  <a href="#" className="desc-user">
                    raccoons
                  </a>
                  북극에 오로라를 보러 왔다. 하늘이 정말 아름답구나. 다시
                  태어나면 북극곰으로 태어나고 싶다.
                </p>
                <button type="button" className="desc-more-btn">
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
              <p className="comment-btn">
                댓글&nbsp;<span className="comment-counting">0</span>개 모두
                보기
              </p>
              <ul className="comment-list">
                {/* Event 3-3 : 업데이트 된 listElement 배열을 map으로 돌린다. (Comment 자식 컴포넌트에 props 전달하여 내용 바꾸기) */}
                {listElement.map((el, index) => (
                  <Comment
                    key={index}
                    nickname={el.nickname}
                    description={el.description}
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
        </div>
        <div className="main-right">
          <div className="main-fixed-space">
            <div className="login-user">
              <div className="login-user-tum-wrap">
                <div className="login-user-tum-img"></div>
              </div>
              <div className="nickname-wrap">
                <p>raccoons</p>
                <p>너구리</p>
              </div>
              <button type="button" className="change-btn">
                전환
              </button>
            </div>
            <div className="suggestion-wrap">
              <div className="suggestion-header">
                <span>회원님을 위한 추천</span>
                <a href="#">모두 보기</a>
              </div>
              <div className="suggestion-list-wrap">
                <div className="suggestion-list">
                  <div className="suggestion-tum-wrap">
                    <div className="suggestion-tum-img"></div>
                  </div>
                  <div className="suggestion-user-wrap">
                    <p>elephant</p>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <button type="button" className="follow-button">
                    팔로우
                  </button>
                </div>
                <div className="suggestion-list">
                  <div className="suggestion-tum-wrap">
                    <div className="suggestion-tum-img"></div>
                  </div>
                  <div className="suggestion-user-wrap">
                    <p>lion</p>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <button type="button" className="follow-button">
                    팔로우
                  </button>
                </div>
                <div className="suggestion-list">
                  <div className="suggestion-tum-wrap">
                    <div className="suggestion-tum-img"></div>
                  </div>
                  <div className="suggestion-user-wrap">
                    <p>rabit</p>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <button type="button" className="follow-button">
                    팔로우
                  </button>
                </div>
                <div className="suggestion-list">
                  <div className="suggestion-tum-wrap">
                    <div className="suggestion-tum-img"></div>
                  </div>
                  <div className="suggestion-user-wrap">
                    <p>tiger</p>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <button type="button" className="follow-button">
                    팔로우
                  </button>
                </div>
                <div className="suggestion-list">
                  <div className="suggestion-tum-wrap">
                    <div className="suggestion-tum-img"></div>
                  </div>
                  <div className="suggestion-user-wrap">
                    <p>weasel</p>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <button type="button" className="follow-button">
                    팔로우
                  </button>
                </div>
              </div>
            </div>
            <div className="right-foo">
              <ul>
                <li>
                  <a href="#">소개</a>
                </li>
                <li>
                  <a href="#">도움말</a>
                </li>
                <li>
                  <a href="#">홍보 센터</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
                <li>
                  <a href="#">채용 정보</a>
                </li>
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">약관</a>
                </li>
                <li>
                  <a href="#">위치</a>
                </li>
                <li>
                  <a href="#">인기 계정</a>
                </li>
                <li>
                  <a href="#">해시태그</a>
                </li>
                <li>
                  <a href="#">언어</a>
                </li>
              </ul>
              <span className="copy">© 2022 INSTAGRAM FROM META</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
