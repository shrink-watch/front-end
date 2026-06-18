import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';
import ReportModal from './components/ReportModal';
import Header from './components/Header';
import Main from './pages/Main';
import DetailPage from './pages/DetailPage';

// ⭐️ 솜솜이 기본 프사용 이미지 미리 불러오기
import profile1 from './assets/Profile1.png';

const initialReports = [
  { 
    id: 1, 
    nickname: '솜솜이', 
    profileImg: profile1, // ⭐️ 임시 색상(color) 대신 진짜 이미지를 기본값으로 지정
    productName: '국민 냉동고기만두', 
    oldVolume: '400', 
    newVolume: '360', 
    price: '8,500', 
    content: '정말 양이 줄어든 것 같아요. 포장지는 그대로인데 속이 비었네요. 용량이 줄어든게 확 느껴집니다.', 
    time: '2시간 전', 
    decreaseRate: 10 
  }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [reports, setReports] = useState(initialReports);
  
  // ⭐️ [수정] 어떤 게시글을 수정 중인지 기억하는 상태 (null이면 새 글 작성 모드)
  const [editingReport, setEditingReport] = useState(null);

  // 모달 닫을 때 상태 초기화하는 함수
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingReport(null); // 수정 중이던 데이터 지우기
  };

  // ⭐️ [작성/수정 완료] 하나의 함수에서 작성과 수정을 모두 처리하도록 통합
  const handleSubmitReport = (reportData) => {
    if (editingReport) {
      // 1. 수정 모드일 때: 기존 데이터 찾아서 교체하기
      setReports(reports.map(r => r.id === editingReport.id ? { ...editingReport, ...reportData } : r));
    } else {
      // 2. 새 글 작성 모드일 때: 맨 앞에 추가하기
      const newReport = { id: Date.now(), ...reportData, time: '방금 전' };
      setReports([newReport, ...reports]); 
    }
    handleCloseModal(); // 모달 닫기
  };

  // ⭐️ [삭제] 진짜로 데이터를 지우는 함수
  const handleDeleteReport = (id) => {
    setReports(reports.filter(report => report.id !== id));
  };
  
  // ⭐️ [수정창 열기] 수정 버튼 눌렀을 때 데이터를 채워서 모달을 여는 함수
  const handleOpenEditModal = (reportId) => {
    const reportToEdit = reports.find(r => r.id === reportId);
    if (reportToEdit) {
      setEditingReport(reportToEdit); // 수정할 데이터 채워넣기
      setIsModalOpen(true); // 모달 열기
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F6F7F8] font-sans flex flex-col items-center overflow-x-hidden">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Routes>
          <Route 
            path="/" 
            element={
              <Main 
                searchQuery={searchQuery} 
                onOpenModal={() => setIsModalOpen(true)} // 새 글 작성 모드로 열기
                reports={reports} 
                onDeleteReport={handleDeleteReport}  // 삭제 함수 전달
                onOpenEditModal={handleOpenEditModal} // 수정 모달 여는 함수 전달
              />
            } 
          />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>

        <Footer />
        
        {/* 제보/수정 모달 */}
        <ReportModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} // 닫기 함수 연결
          onSubmit={handleSubmitReport} // 통합 제출 함수 연결
          editingReport={editingReport} // 현재 수정 중인 데이터 전달 (없으면 null)
        />
      </div>
    </BrowserRouter>
  );
}