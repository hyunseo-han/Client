import React from 'react';
import GlobalStyles from './styles/GlobalStyle';
import Router from './Router';
import NormalJoin from './components/Login/NormalJoin';
import NormalJoin2 from './components/Login/NormalJoin2';
import Complete from './components/Login/Complete';
import MyPageHeader from './components/MyPage/MyPageHeader';
import AccountManage from './components/MyPage/AccountManage';
import MyPageMain from './components/MyPage/MyPageMain';
import TravelManage from './components/MyPage/TravelManage';

function App() {
  return (
    <>
      <GlobalStyles />
      <AccountManage />
    </>
  );
}

export default App;
