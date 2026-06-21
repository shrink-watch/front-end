import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import ReportModal from './components/ReportModal';
import Header from './components/Header';
import Main from './pages/Main';
import DetailPage from './pages/DetailPage';

import Profile1 from './assets/Profile1.png';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [reports, setReports] = useState([]);
  const [editingReport, setEditingReport] = useState(null);

  const fetchReports = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/reports');

      const mappedReports = response.data.map(data => {
        const oldVol = data.previousVolume;
        const newVol = data.currentVolume;
        const decreaseRate = oldVol && newVol ? Math.round(((oldVol - newVol) / oldVol) * 100) : 0;

        const dateObj = new Date(data.createdAt);
        const timeString = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;

        return {
          id: data.reportId,
          nickname: data.nickname || '익명 소비자',
          profileImg: Profile1,
          productName: data.productName,
          oldVolume: oldVol,
          newVolume: newVol,
          price: data.price.toLocaleString(),
          content: data.content,
          time: timeString,
          decreaseRate: decreaseRate
        };
      });
      setReports(mappedReports);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingReport(null);
    fetchReports();
  };

  const handleSubmitReport = () => {
    handleCloseModal();
  };

  const handleDeleteReport = (id) => {
    setReports(reports.filter(report => report.id !== id));
  };

  const handleOpenEditModal = (reportId) => {
    const reportToEdit = reports.find(r => r.id === reportId);
    if (reportToEdit) {
      setEditingReport(reportToEdit);
      setIsModalOpen(true);
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
                onOpenModal={() => setIsModalOpen(true)}
                reports={reports}
                onDeleteReport={handleDeleteReport}
                onOpenEditModal={handleOpenEditModal}
              />
            }
          />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>

        <Footer />

        <ReportModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitReport}
          editingReport={editingReport}
        />
      </div>
    </BrowserRouter>
  );
}