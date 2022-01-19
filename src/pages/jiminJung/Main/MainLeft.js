import React, { useState, useEffect } from 'react';
import Feed from './Feed';
import './MainLeft.scss';
function MainLeft() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/dataJimn/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  return (
    <div className="mainLeft">
      <div class="feeds">
        {feeds.map(x => {
          return (
            <Feed
              feedImgUrl={x.feedImgUrl}
              feedUserName={x.feedUserName}
              feedContent={x.feedContent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainLeft;
