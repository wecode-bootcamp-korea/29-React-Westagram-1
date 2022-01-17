import React from 'react';

import './Main.scss';
import Feed from './Feed';
import Nav from '../../../components/Nav/Nav';
import Story from './Story';
import Recommendation from './Recommendation';
import Footer from './Footer';

function Main() {
  return (
    <div className="body2">
      <div className="navWrap">
        <Nav />
      </div>
      <main>
        <div className="main-container">
          <div className="feeds">
            <Feed />
          </div>
          <aside className="main-right">
            <div className="main-right-fixing">
              <div className="profile">
                <div className="profile-img-container">
                  <img src="images/seunghyunKark/profile1.jpg" alt="profile" />
                </div>
                <div id="profile-info">
                  <div className="id bold">vittoria.kark</div>
                  <div className="name">곽승현 Tori Kark</div>
                </div>
              </div>
              <Story />
              <Recommendation />
            </div>
            <Footer />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Main;
