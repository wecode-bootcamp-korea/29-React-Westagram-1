import React from 'react';

import './Main.scss';

import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds';
import MainRight from './MainRight';

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
