export default function ReportModal({ isOpen, onClose }) {
  // isOpen이 false면 아무것도 화면에 그리지 않고 숨깁니다.
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl p-10 relative flex flex-col gap-8 shadow-xl">
        
        {/* 닫기 (X) 버튼 */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-500 hover:text-black transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="text-[22px] font-bold text-black">제보하기</h2>

        {/* 유저 프로필 영역 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <span className="font-bold text-[15px] text-black">Username</span>
        </div>

        {/* 입력 폼 영역 */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <div className="flex items-center gap-4 flex-1">
              <span className="text-[14px] font-bold text-black shrink-0 w-16">제품명</span>
              <input type="text" className="bg-[#F1F3F5] rounded-lg px-4 py-2.5 w-full outline-none text-sm text-gray-700" />
            </div>
            <div className="flex items-center gap-4 flex-1">
              <span className="text-[14px] font-bold text-black shrink-0 w-12">구매처</span>
              <input type="text" className="bg-[#F1F3F5] rounded-lg px-4 py-2.5 w-full outline-none text-sm text-gray-700" />
            </div>
            <div className="flex items-center gap-4 flex-1">
              <span className="text-[14px] font-bold text-black shrink-0 w-16">현재 가격</span>
              <input type="text" className="bg-[#F1F3F5] rounded-lg px-4 py-2.5 w-full outline-none text-sm text-gray-700" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[14px] font-bold text-black w-16">용량</span>
            <input type="text" placeholder="변경 전 용량" className="bg-[#F1F3F5] rounded-lg px-4 py-2.5 w-[140px] outline-none text-sm text-center text-gray-700 placeholder-gray-400" />
            <span className="text-gray-600 font-bold">➔</span>
            <input type="text" placeholder="변경 후 용량" className="bg-[#F1F3F5] rounded-lg px-4 py-2.5 w-[140px] outline-none text-sm text-center text-gray-700 placeholder-gray-400" />
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <span className="text-[14px] font-bold text-black">제보 내용</span>
            <textarea 
              className="bg-[#F1F3F5] rounded-xl p-5 w-full h-[140px] outline-none text-sm text-gray-700 resize-none"
            ></textarea>
          </div>
        </div>

        <button className="w-full bg-[#01a7fb] hover:bg-[#0092dd] text-white font-bold py-4 rounded-xl mt-2 transition-colors text-[16px]">
          제출하기
        </button>
        
      </div>
    </div>
  );
}