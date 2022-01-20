import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds';
import MainRight from './MainRight';
import './Main.scss';

function Main() {
  return (
    <>
      <Nav />
      <div className="mainWrapper">
        <Feeds />
        <MainRight />
      </div>
    </>
  );
}

export default Main;
