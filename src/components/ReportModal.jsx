import React, { useState, useEffect } from 'react'; // ⭐️ useEffect 추가

// 준비해주신 캐릭터 프로필 사진 5개 import
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.png';

// ⭐️ editingReport 프롭스 추가 (수정 중인 데이터)
export default function ReportModal({ isOpen, onClose, onSubmit, editingReport }) {
  const [selectedProfile, setSelectedProfile] = useState(0);
  const profiles = [profile1, profile2, profile3, profile4, profile5];

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [productName, setProductName] = useState('');
  const [store, setStore] = useState('');
  const [oldVolume, setOldVolume] = useState('');
  const [newVolume, setNewVolume] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');

  // ⭐️ [수정 모드 연결] editingReport 데이터가 바뀌면 (수정창이 열리면) 입력칸에 데이터 채워넣기
  useEffect(() => {
    if (editingReport && isOpen) {
      // 1. 기존 데이터 채우기
      setNickname(editingReport.nickname);
      setPassword(editingReport.password || ''); // 비밀번호는 안 담겨왔으면 빈칸
      setProductName(editingReport.productName);
      setStore(editingReport.store || ''); // 구매처 안 담겨왔으면 빈칸
      setOldVolume(editingReport.oldVolume);
      setNewVolume(editingReport.newVolume);
      setPrice(String(editingReport.price).replace(/,/g, '')); // 쉼표 제거하고 채우기
      setContent(editingReport.content);
      
      // 2. 프로필 사진 인덱스 찾아서 맞추기
      const profileIdx = profiles.findIndex(p => p === editingReport.profileImg);
      setSelectedProfile(profileIdx !== -1 ? profileIdx : 0);
    } else {
      // 3. 새 글 작성 모드이거나 모달이 닫혔으면 입력칸 다 비우기
      setNickname(''); setPassword(''); setProductName(''); setStore('');
      setOldVolume(''); setNewVolume(''); setPrice(''); setContent('');
      setSelectedProfile(0);
    }
  }, [editingReport, isOpen]); // ⭐️ 이 데이터들이 바뀌면 실행됨

  const isFormValid = 
    nickname.trim() !== '' && password.trim() !== '' && productName.trim() !== '' && 
    oldVolume.trim() !== '' && newVolume.trim() !== '' && price.trim() !== '' && content.trim() !== '';

  const handleSubmit = () => {
    if (!isFormValid) return; 

    const reportData = {
      nickname,
      password, // 수정시 비밀번호 확인을 위해 이것도 부모로 같이 넘겨줍니다 (로컬용)
      productName,
      store,
      oldVolume: Number(oldVolume),
      newVolume: Number(newVolume),
      decreaseRate: Math.round(((Number(oldVolume) - Number(newVolume)) / Number(oldVolume)) * 100),
      price: Number(price).toLocaleString(),
      content,
      profileImg: profiles[selectedProfile],
    };

    // 부모 컴포넌트(App.jsx)의 통합 제출 함수 실행
    if (onSubmit) {
      onSubmit(reportData);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[720px] rounded-[16px] p-8 flex flex-col shadow-xl">
        
        <div className="flex justify-between items-center mb-[28px]">
          {/* ⭐️ 제목 변경 */}
          <h2 className="text-[24px] font-bold text-black shrinking-0">{editingReport ? '제보 수정하기' : '제보하기'}</h2>
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
                <div key={idx} onClick={() => setSelectedProfile(idx)} className={`w-[44px] h-[44px] rounded-full cursor-pointer p-[2px] border-[2px] transition-all ${selectedProfile === idx ? 'border-[#01a7fb] bg-[#CDE8FF]' : 'border-transparent opacity-60 hover:opacity-100'}`}><img src={img} alt={`옵션 ${idx}`} className="w-full h-full rounded-full object-cover" /></div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center text-[13px] font-bold">
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

        {/* ⭐️ 버튼 글씨 변경 */}
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