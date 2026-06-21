import React, { useState, useEffect } from 'react';
import axios from 'axios'; // ⭐️ axios 추가!

import Profile1 from '../assets/Profile1.png';
import Profile2 from '../assets/Profile2.png';
import Profile3 from '../assets/Profile3.png';
import Profile4 from '../assets/Profile4.png';
import Profile5 from '../assets/Profile5.png';

export default function ReportModal({ isOpen, onClose, onSubmit, editingReport }) {
  const [selectedProfile, setSelectedProfile] = useState(0);
  const profiles = [Profile1, Profile2, Profile3, Profile4, Profile5];

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [productName, setProductName] = useState('');
  const [store, setStore] = useState('');
  const [oldVolume, setOldVolume] = useState('');
  const [newVolume, setNewVolume] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingReport && isOpen) {
      setNickname(editingReport.nickname || '');
      setPassword(editingReport.password || ''); 
      setProductName(editingReport.productName || '');
      setStore(editingReport.store || ''); 
      setOldVolume(editingReport.oldVolume ? String(editingReport.oldVolume) : '');
      setNewVolume(editingReport.newVolume ? String(editingReport.newVolume) : '');
      setPrice(editingReport.price ? String(editingReport.price).replace(/,/g, '') : ''); 
      setContent(editingReport.content || '');
      
      const profileIdx = profiles.findIndex(p => p === editingReport.profileImg);
      setSelectedProfile(profileIdx !== -1 ? profileIdx : 0);
    } else if (isOpen) {
      setNickname(''); setPassword(''); setProductName(''); setStore('');
      setOldVolume(''); setNewVolume(''); setPrice(''); setContent('');
      setSelectedProfile(0);
    }
  }, [editingReport, isOpen]);

  const isFormValid = 
    String(nickname).trim() !== '' && 
    String(password).trim() !== '' && 
    String(productName).trim() !== '' && 
    String(oldVolume).trim() !== '' && 
    String(newVolume).trim() !== '' && 
    String(price).trim() !== '' && 
    String(content).trim() !== '';

  // ⭐️ 백엔드로 데이터를 쏘는 로직으로 변경
  const handleSubmit = async () => {
    if (!isFormValid) return; 

    // 수정 모드일 때는 아직 백엔드 API가 없으므로 기존 로직 유지
    if (editingReport) {
      const reportData = {
        id: editingReport.id,
        nickname, password, productName, store, content,
        oldVolume: Number(oldVolume),
        newVolume: Number(newVolume),
        price: Number(price).toLocaleString(),
        profileImg: profiles[selectedProfile],
      };
      if (onSubmit) onSubmit(reportData);
      return;
    }

    // ⭐️ 새 글 작성 시 백엔드 (POST /api/reports) 연동
    try {
      const payload = {
        productName: productName,
        content: content,
        previousVolume: Number(oldVolume),
        currentVolume: Number(newVolume),
        price: Number(String(price).replace(/,/g, '')), // 콤마 제거 후 순수 숫자로 전송
        store: store
      };

      const response = await axios.post('http://localhost:8080/api/reports', payload);

      if (response.status === 201 || response.data.success) {
        alert(response.data.message || '제보가 성공적으로 등록되었습니다! (관리자 승인 후 노출됩니다)');
        if (onSubmit) onSubmit(); // 부모(App.jsx)에게 완료 알림 -> 모달 닫기 및 피드 새로고침용
      }
    } catch (error) {
      console.error("제보 등록 에러:", error);
      alert("제보 등록 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[720px] rounded-[16px] p-8 flex flex-col shadow-xl">
        
        <div className="flex justify-between items-center mb-[28px]">
          <h2 className="text-[24px] font-bold text-black shrink-0">{editingReport ? '제보 수정하기' : '제보하기'}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex justify-between items-center mb-[28px]">
          <div className="flex items-center gap-6">
            <div className="w-[80px] h-[80px] rounded-full shrink-0 shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden bg-white">
              <img src={profiles[selectedProfile]} alt="대표 프로필" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 w-[160px] items-center">
              {profiles.map((img, idx) => (
                <div key={idx} onClick={() => setSelectedProfile(idx)} className={`w-[44px] h-[44px] rounded-full cursor-pointer p-[2px] border-[2px] transition-all shrink-0 ${selectedProfile === idx ? 'border-[#01a7fb] bg-[#CDE8FF]' : 'border-transparent opacity-60 hover:opacity-100'}`}><img src={img} alt={`옵션 ${idx}`} className="w-full h-full rounded-full object-cover" /></div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center text-[13px] font-bold shrink-0">
            <div className="flex items-center gap-2">닉네임<input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} className="w-[90px] h-[32px] bg-[#F6F7F8] rounded-[4px] px-2 outline-none focus:ring-1 focus:ring-[#01a7fb]" /></div>
            <div className="flex items-center gap-2">비밀번호<input type="password" placeholder="0000" value={password} onChange={(e) => setPassword(e.target.value)} className="w-[70px] h-[32px] bg-[#F6F7F8] rounded-[4px] px-2 outline-none focus:ring-1 focus:ring-[#01a7fb] placeholder:text-gray-300 text-center" /></div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#E5E7EB] mb-[28px]"></div>

        <div className="flex flex-col gap-[20px] mb-[28px] text-[14px] font-bold">
          <div className="flex items-center gap-4">제품명<input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-[240px] h-[36px] bg-[#F6F7F8] rounded-[4px] px-3 outline-none focus:ring-1 focus:ring-[#01a7fb]" /></div>
          <div className="flex flex-wrap gap-x-6 gap-y-[20px] items-center">
            구매처<input type="text" value={store} onChange={(e) => setStore(e.target.value)} className="w-[120px] h-[36px] bg-[#F6F7F8] rounded-[4px] px-3 outline-none focus:ring-1 focus:ring-[#01a7fb]" />
            용량
            <div className="flex items-center gap-2 shrink-0 font-bold text-[14px]">
              <input type="number" value={oldVolume} onChange={(e) => setOldVolume(e.target.value)} className="w-[80px] h-[36px] bg-[#F6F7F8] rounded-[4px] px-2 text-[13px] outline-none text-center focus:ring-1 focus:ring-[#01a7fb]" />
              <span className="text-[#01a7fb]">g</span> <span className="text-[#01a7fb] mx-1">→</span>
              <input type="number" value={newVolume} onChange={(e) => setNewVolume(e.target.value)} className="w-[80px] h-[36px] bg-[#F6F7F8] rounded-[4px] px-2 text-[13px] outline-none text-center focus:ring-1 focus:ring-[#01a7fb]" />
              <span className="text-[#01a7fb]">g</span>
            </div>
            <div className="flex items-center gap-1 shrink-0 font-bold ml-auto">가격<input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-[100px] h-[36px] bg-[#F6F7F8] rounded-[4px] px-3 outline-none text-right focus:ring-1 focus:ring-[#01a7fb]" /><span className="text-[#01a7fb]">원</span></div>
          </div>
          <div className="flex flex-col gap-2">제보 내용<textarea placeholder="구체적인 제보 내용을 입력해 주세요." value={content} onChange={(e) => setContent(e.target.value)} className="w-full h-[120px] bg-[#F6F7F8] rounded-[4px] p-3 outline-none resize-none focus:ring-1 focus:ring-[#01a7fb] font-medium"></textarea></div>
        </div>

        <button 
          onClick={handleSubmit} disabled={!isFormValid}
          className={`w-full h-[48px] font-bold text-[16px] rounded-[4px] transition-colors shrink-0 ${isFormValid ? 'bg-[#01A7FB] text-white hover:bg-[#0092dd]' : 'bg-[#9EA4AA] text-white cursor-not-allowed'}`}
        >
          {editingReport ? '수정하기' : '제출하기'}
        </button>

      </div>
    </div>
  );
}