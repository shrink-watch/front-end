import profileImg from '../assets/profile.png'; 

// onOpenModal 이라는 신호기(prop)를 받아옵니다.
export default function ReportSection({ onOpenModal }) {
  const reports = [1, 2];

  return (
    <div className="w-full bg-[#DDE2EB] flex justify-center py-12 mt-16">
      <div className="w-full max-w-6xl px-6 flex flex-col">
        <div className="flex justify-between items-end mb-2">
          <div>
            <h3 className="text-[22px] font-bold text-black tracking-tight mb-1">소비자 제보</h3>
            <p className="text-[13px] text-gray-500">슈링크워치는 소비자들의 제보로 운영되어요. 지금 '제보하기'를 눌러참여해 보세요!</p>
          </div>
          <span className="text-[14px] text-[#01a7fb] font-medium cursor-pointer hover:text-[#0092dd]">더보기 &gt;</span>
        </div>

        <div className="mt-6 flex gap-6">
          <div className="flex-1 flex flex-col gap-4">
            {reports.map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 flex gap-5 shadow-sm">
                <img src={profileImg} alt="profile" className="w-11 h-11 rounded-full object-cover shrink-0 border border-gray-100" />
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-[15px] text-black mr-1">솜솜이</span>
                    <span className="bg-[#F6F7F8] text-gray-600 text-[12px] px-2 py-1 rounded font-medium">국민 냉동고기만두</span>
                    <div className="flex items-center text-[13px] font-bold ml-1">
                      <span className="text-black">400g</span>
                      <span className="text-[#fb3748] mx-2">➔</span>
                      <span className="text-[#fb3748]">360g</span>
                    </div>
                    <span className="bg-[#fb3748] text-white text-[11px] px-2 py-1 rounded font-bold ml-1">-10% 용량 감소</span>
                    <span className="font-black text-[18px] text-black ml-auto">8,500원</span>
                  </div>
                  <p className="text-[14px] text-gray-700 leading-relaxed mb-3">
                    정말 양이 줄어든 것 같아요. 포장지는 그대로인데 속이 비었네요. 용량이 줄어든게 확 느껴집니다.
                  </p>
                  <span className="text-[12px] text-gray-400">2시간 전</span>
                </div>
              </div>
            ))}
          </div>

          {/* onClick 이벤트를 달아서 버튼을 누르면 onOpenModal 신호를 켭니다 */}
          <div 
            onClick={onOpenModal}
            className="w-[180px] shrink-0 bg-[#01a7fb] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#0092dd] transition-colors text-white shadow-sm"
          >
            <span className="text-4xl font-light mb-1">+</span>
            <span className="text-[15px] font-bold">제보하기</span>
          </div>
        </div>
      </div>
    </div>
  );
}