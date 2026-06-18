import React, { useState } from 'react';
import PasswordModal from './PasswordModal';

export default function ReportSection({ onOpenModal, reports = [], onDeleteReport, onOpenEditModal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("");
  const [selectedReportId, setSelectedReportId] = useState(null);

  const handleActionClick = (mode, id) => {
    setModalMode(mode);
    setSelectedReportId(id);
    setIsModalOpen(true);
  };

  const handlePasswordConfirm = (password) => {
    if (modalMode === 'delete') {
      onDeleteReport(selectedReportId);
    } else if (modalMode === 'edit') {
      onOpenEditModal(selectedReportId);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="w-full bg-[#EAECEF] py-16 flex justify-center mt-12">
        <div className="w-full max-w-6xl px-6 flex flex-col">
          <div className="flex justify-between items-end mb-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-[22px] font-bold text-black tracking-tight">소비자 제보</h3>
              <span className="text-[13px] text-gray-500">슈링크워치는 소비자들의 제보로 운영되어요.</span>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-4">
              {reports.slice(0, 3).map((report) => (
                <div key={report.id} className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {report.profileImg ? (
                        <img src={report.profileImg} alt="profile" className="w-10 h-10 rounded-full object-cover shrink-0" />
                      ) : (
                        <div className={`w-10 h-10 rounded-full shrink-0 ${report.color || 'bg-gray-400'}`}></div>
                      )}
                      <span className="font-bold text-[14px]">{report.nickname}</span>
                      
                      <div className="flex items-center gap-2 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100 text-[12px]">
                        <span className="text-gray-500">{report.productName}</span>
                        <span className="font-bold">
                          {report.oldVolume}g <span className="text-red-500 font-normal mx-0.5">→</span> {report.newVolume}g
                        </span>
                        {/* ⭐️ 삭제되었던 빨간색 감소율 뱃지 복구 완료! */}
                        {report.decreaseRate > 0 && (
                          <span className="bg-[#fb3748] text-white text-[10px] font-bold px-1.5 py-0.5 rounded ml-1">
                            -{report.decreaseRate}% 용량 감소
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* 우측 상단: 가격 & 수정/삭제 버튼 */}
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-black text-[18px]">{report.price}원</span>
                      <div className="flex items-center gap-3 border-l pl-4">
                        <button onClick={() => handleActionClick("delete", report.id)} className="text-gray-400 hover:text-black text-[13px] font-medium flex items-center gap-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                          삭제
                        </button>
                        <button onClick={() => handleActionClick("edit", report.id)} className="text-gray-400 hover:text-black text-[13px] font-medium flex items-center gap-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.1 2.1 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                          수정
                        </button>
                      </div>
                    </div>

                  </div>
                  <p className="text-[13px] text-gray-700 mt-1">{report.content}</p>
                  <span className="text-[11px] text-gray-400 mt-1">{report.time}</span>
                </div>
              ))}
            </div>

            <div onClick={onOpenModal} className="w-[280px] shrink-0 bg-[#01a7fb] hover:bg-[#0092dd] rounded-xl flex flex-col items-center justify-center cursor-pointer text-white shadow-sm transition-colors">
              <span className="text-4xl font-light mb-2">+</span>
              <span className="font-bold text-[15px]">제보하기</span>
            </div>
          </div>
        </div>
      </section>

      <PasswordModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handlePasswordConfirm}
        mode={modalMode}
      />
    </>
  );
}