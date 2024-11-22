import LoginInterface from './NguoiDung/login.jsx';
import LeftNavbar from './NguoiDung/leftNav.jsx';
import TopNavbar from './NguoiDung/topNav.jsx';
import HomepageUser from './NguoiDung/homepage.jsx';
import RegistBorrowBook from './NguoiDung/regist.jsx';
import HistoryBookBorrow from './NguoiDung/history.jsx';
import BorrowBook from './NguoiDung/borrow.jsx';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MessageReceive from './NguoiDung/message.jsx';
import Notification from './NguoiDung/notify.jsx';
import InfoUser from './NguoiDung/info.jsx';

function App() {
  return (
    <>
      {/* <InfoUser/> */}
      <Router>
        <LeftNavbar />
        <TopNavbar/>
        <Routes>
          <Route path="homepage" element={<HomepageUser />} />
          <Route path="regist" element={<RegistBorrowBook />} />
          <Route path="history" element={<HistoryBookBorrow />} />
          <Route path="borrow" element={<BorrowBook />} />
          <Route path='information' element={<InfoUser/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
