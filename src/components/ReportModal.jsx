import { useState } from 'react';

const profiles = [
  { id: 'default', label: '[기본]', color: 'bg-gray-400' },
  { id: 'profile1', label: '[프사1]', color: 'bg-gray-500' },
  { id: 'profile2', label: '[프사2]', color: 'bg-gray-600' },
  { id: 'profile3', label: '[프사3]', color: 'bg-gray-700' },
  { id: 'profile4', label: '[프사4]', color: 'bg-gray-800' },
  { id: 'profile5', label: '[프사5]', color: 'bg-gray-900' },
];

export default function ReportModal({ isOpen, onClose, onAddReport }) {
  const [selectedProfile, setSelectedProfile] = useState('default');
  const [formData, setFormData] = useState({
    nickname: '',
    productName: '',
    shop: '',
    oldVolume: '',
    newVolume: '',
    price: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // 🚀 감소율(%) 자동 계산 로직
    const oldV = parseFloat(formData.oldVolume);
    const newV = parseFloat(formData.newVolume);
    let rate = 0;
    if (oldV && newV && oldV > newV) {
      rate = Math.round(((oldV - newV) / oldV) * 100);
    }

    const selectedColor = profiles.find(p => p.id === selectedProfile)?.color || 'bg-gray-400';
    
    // 🚀 App.jsx 로 보낼 새 제보 객체 만들기
    const newReport = {
      id: Date.now(),
      nickname: formData.nickname || '익명 사용자',
      color: selectedColor,
      productName: formData.productName || '미입력 상품',
      oldVolume: formData.oldVolume || '0',
      newVolume: formData.newVolume || '0',
      price: formData.price || '0',
      content: formData.content || '내용이 없습니다.',
      time: '방금 전',
      decreaseRate: rate
    };

    onAddReport(newReport); // 부모한테 전송!
    
    // 모달창 입력 데이터 초기화
    setFormData({ nickname: '', productName: '', shop: '', oldVolume: '', newVolume: '', price: '', content: '' });
    setSelectedProfile('default');
    
    alert("제보가 성공적으로 등록되었습니다!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl flex flex-col shadow-2xl overflow-hidden">
        
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">제보하기</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[75vh] flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full flex shrink-0 ${profiles.find(p => p.id === selectedProfile)?.color}`}></div>
            <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} placeholder="닉네임을 입력하세요" className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-[#01a7fb] focus:border-[#01a7fb] block w-48 p-2.5 outline-none" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-gray-700">프로필 이미지 고르기</span>
            <div className="flex gap-3">
              {profiles.map((profile) => (
                <div key={profile.id} onClick={() => setSelectedProfile(profile.id)} className={`flex flex-col items-center gap-2 p-2 rounded-lg cursor-pointer border-2 transition-all ${selectedProfile === profile.id ? 'border-[#01a7fb] bg-blue-50' : 'border-transparent hover:bg-gray-50'}`}>
                  <div className={`w-12 h-12 rounded-full ${profile.color}`}></div>
                  <span className="text-[11px] text-gray-600 font-medium">{profile.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-gray-700 w-12">제품명</span>
              <input type="text" name="productName" value={formData.productName} onChange={handleChange} placeholder="제품명이나 바코드 번호를 입력하세요." className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-[#01a7fb] focus:border-[#01a7fb] block p-2.5 outline-none" />
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-gray-700 w-12">구매처</span>
                <input type="text" name="shop" value={formData.shop} onChange={handleChange} placeholder="예: 쿠팡" className="w-28 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-[#01a7fb] focus:border-[#01a7fb] block p-2.5 outline-none" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-700 mr-1">용량</span>
                <input type="text" name="oldVolume" value={formData.oldVolume} onChange={handleChange} placeholder="과거" className="w-20 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-[#01a7fb] focus:border-[#01a7fb] block p-2.5 text-center outline-none" />
                <span className="text-sm text-gray-500 font-medium">g</span>
                <span className="text-gray-400 mx-1">→</span>
                <input type="text" name="newVolume" value={formData.newVolume} onChange={handleChange} placeholder="현재" className="w-20 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-[#01a7fb] focus:border-[#01a7fb] block p-2.5 text-center outline-none" />
                <span className="text-sm text-gray-500 font-medium">g</span>
              </div>
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-sm font-bold text-gray-700">가격</span>
                <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="가격" className="w-28 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-[#01a7fb] focus:border-[#01a7fb] block p-2.5 text-right outline-none" />
                <span className="text-sm text-gray-500 font-medium">원</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <span className="text-sm font-bold text-gray-700">제보 내용</span>
              <textarea name="content" value={formData.content} onChange={handleChange} placeholder="양이 정말 줄어든 것 같아요. 포장지는 그대로인데 속이 비었네요..." className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-[#01a7fb] focus:border-[#01a7fb] block p-3 outline-none resize-none h-28"></textarea>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <button onClick={handleSubmit} className="w-full bg-[#01a7fb] hover:bg-[#0092dd] transition-colors text-white font-bold rounded-lg text-base px-5 py-3.5 text-center">
            제출하기
          </button>
        </div>

      </div>
    </div>
  );
}