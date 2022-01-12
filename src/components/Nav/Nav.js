import React from 'react'
import "./Nav.scss"
import { FaSearch, FaHome, FaPaperPlane, FaPlusSquare, FaCompass, FaHeart, FaUser, FaBookmark, FaCog, FaSyncAlt } from 'react-icons/fa'

const Nav = () => {
    return (
        <div>
            <header id="header">
                <div className="header-inner-wrap">
                    <div className="logo-wrap">
                        <img src="/images/header_logo.png" alt="logo" className="logo-calligraph" />
                    </div>
                    <div className="search-wrap">
                        <div className="input-inner">
                            <FaSearch className="fas fa-search icon-glass" fontSize="14px" color="#888" />
                            <span className="search-text">검색</span>
                        </div>
                        <div className="search-list-wrap">
                            <div className="search-arrow-box"></div>
                            <div className="search-list"></div>
                        </div>
                        <input type="text" name="search" id="header-search" />
                    </div>
                    <nav id="nav">
                        <div className="icon icon-home"><FaHome className="fas fa-home nav-icon"/></div>
                        <div className="icon icon-paper-plane"><FaPaperPlane className="far fa-paper-plane nav-icon"/></div>
                        <div className="icon icon-plus-square"><FaPlusSquare className="far fa-plus-square nav-icon"/></div>
                        <div className="icon icon-compass"><FaCompass className="far fa-compass nav-icon" /></div>
                        <div className="icon icon-heart"><FaHeart className="far fa-heart nav-icon" /></div>
                        <div className="icon icon-human pop-click-btn">
                            <div className="pop-wrap">
                                <div className="arrow-box"></div>
                                <ul className="profile-pop">
                                    <li className="profile-pop-menu">
                                        <div className="pop-icon"><FaUser className="far fa-user" /></div>
                                        <span>프로필</span>
                                    </li>
                                    <li className="profile-pop-menu">
                                        <div className="pop-icon"><FaBookmark className="far fa-bookmark" /></div>
                                        <span>저장됨</span>
                                    </li>
                                    <li className="profile-pop-menu">
                                        <div className="pop-icon"><FaCog className="fas fa-cog" /></div>
                                        <span>설정</span>
                                    </li>
                                    <li className="profile-pop-menu">
                                        <div className="pop-icon"><FaSyncAlt className="fas fa-sync-alt" /></div>
                                        <span>계정 전환</span>
                                    </li>
                                    {/* <li className="profile-pop-menu logout_btn" onClick="location.href='./login.html'"><span>로그아웃</span></li> */}
                                    <li className="profile-pop-menu logout_btn"><span>로그아웃</span></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Nav
