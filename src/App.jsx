import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';
import ReportModal from './components/ReportModal';
import Header from './components/Header';
import Main from './pages/Main';
import DetailPage from './pages/DetailPage';

const initialReports = [
  { 
    id: 1, 
    nickname: '솜솜이', 
    color: 'bg-gray-400',
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

  const handleAddReport = (newReport) => {
    setReports([newReport, ...reports]); 
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F6F7F8] font-sans flex flex-col items-center overflow-x-hidden">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Routes>
          <Route path="/" element={<Main searchQuery={searchQuery} onOpenModal={() => setIsModalOpen(true)} reports={reports} />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>

        <Footer />
        <ReportModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onAddReport={handleAddReport} 
        />
      </div>
    </BrowserRouter>
  );
}