import React from 'react';
// 페이지 이동을 담당하는 리액트 라우터 기능 불러오기
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 방별로 분리해둔 페이지 컴포넌트 불러오기
import Main from "./pages/Main";
import DetailedPage from "./pages/DetailedPage";

function App() {
  return (
    // BrowserRouter가 앱 전체를 감싸서 URL 이동을 감지합니다.
    <BrowserRouter>
      <Routes>
        {/* 기본 주소(/)로 접속하면 현우님이 만든 Main 컴포넌트를 보여줍니다. */}
        <Route path="/" element={<Main />} />
        
        {/* 주소 뒤에 /detail이 붙으면 시연님이 작업할 DetailedPage 컴포넌트를 보여줍니다. */}
        <Route path="/detail" element={<DetailedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;