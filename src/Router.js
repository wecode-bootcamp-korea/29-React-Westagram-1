import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';

// 재민's 컴포넌트
import MainYu from './pages/jaeminYu/Main/Main';
import LoginYu from './pages/jaeminYu/Login/Login';

// 혜린's 컴포넌트
import MainPark from './pages/hyelinPark/Main/Main';
import LoginPark from './pages/hyelinPark/Login/Login';

// 지민's 컴포넌트
import MainJung from './pages/jiminJung/Main/Main';
import LoginJung from './pages/jiminJung/Login/Login';

// 승현's 컴포넌트
import MainKark from './pages/seunghyunKark/Main/Main';
import LoginKark from './pages/seunghyunKark/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main-jaeminYu" element={<MainYu />} />
        <Route path="/login-jaeminYu" element={<LoginYu />} />
        <Route path="/main-hyelinPark" element={<MainPark />} />
        <Route path="/login-hyelinPark" element={<LoginPark />} />
        <Route path="/main-jiminJung" element={<MainJung />} />
        <Route path="/login-jiminJung" element={<LoginJung />} />
        <Route path="/main-seunghyunKark" element={<MainKark />} />
        <Route path="/login-seunghyunKark" element={<LoginKark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
