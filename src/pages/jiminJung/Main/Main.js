import React from 'react';

import './Main.scss';

import Nav from '../../../components/Nav/Nav';
import MainLeft from './MainLeft';
import MainRight from './MainRight';

function Main() {
  return (
    <>
      <Nav />
      <div className="mainWrapper">
        <MainLeft />
        <MainRight />
      </div>
    </>
  );
}

export default Main;
