import React from 'react';
import './Story.scss';

function Story(props) {
  const mockData = [
    {
      id: 1,
      src: '/images/seunghyunKark/profile3.jpeg',
      user: 'notyourcupoftea998',
      time: '3분 전',
    },
    {
      id: 2,
      src: '/images/seunghyunKark/profile2.jpeg',
      user: 'jihyun_park',
      time: '1시간 전',
    },
    {
      id: 3,
      src: '/images/seunghyunKark/profile3.jpeg',
      user: 'monstera.monday',
      time: '20시간 전',
    },
    {
      id: 4,
      src: '/images/seunghyunKark/profile4.jpeg',
      user: 'trattoria_buffala',
      time: '28분 전',
    },
  ];

  return (
    <section className="story">
      <div className="storyWrapper">
        <div className="story-header bold">
          <div>스토리</div>
          <div className="view-all">모두 보기</div>
        </div>
        {mockData.map(data => {
          return (
            <div className="story-stack" Key={data.id}>
              <div className="aside-profile-img-container">
                <img src={data.src} alt="story profile" />
              </div>
              <div className="profile-info">
                <div className="bold">{data.user}</div>
                <div className="caption">{data.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Story;
