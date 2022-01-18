import React, { useState, useEffect } from 'react';

import './MainLeft.scss';

import Feed from './Feed';

function MainLeft() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/dataJimn/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  return (
    <div className="mainLeft">
      <div class="feeds">
        {feeds.map(x => {
          return <Feed feedImgUrl={x.feedImgUrl} feedContnet={x.feedContnet} />;
        })}
      </div>
    </div>
  );
}

export default MainLeft;
