export default function ReportSection({ onOpenModal, reports = [] }) {
  return (
    <section className="w-full bg-[#EAECEF] py-16 flex justify-center mt-12">
      <div className="w-full max-w-6xl px-6 flex flex-col">
        <div className="flex justify-between items-end mb-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-[22px] font-bold text-black tracking-tight">소비자 제보</h3>
            <span className="text-[13px] text-gray-500">슈링크워치는 소비자들의 제보로 운영되어요. 지금 '제보하기'를 눌러참여해 보세요!</span>
          </div>
          <span className="text-[14px] text-[#01a7fb] font-medium cursor-pointer hover:text-[#0092dd]">더보기 &gt;</span>
        </div>

        <div className="flex gap-6">
          {/* 🚀 왼쪽: 넘겨받은 배열(reports)을 화면에 그립니다 (최대 3개까지만) */}
          <div className="flex-1 flex flex-col gap-4">
            {reports.slice(0, 3).map((report) => (
              <div key={report.id} className="bg-white rounded-xl p-5 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${report.color}`}></div>
                    <span className="font-bold text-[14px]">{report.nickname}</span>
                    <div className="flex items-center gap-2 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                      <span className="text-gray-500 text-[12px]">{report.productName}</span>
                      <span className="font-bold text-[13px]">
                        {report.oldVolume}g <span className="text-red-500 font-normal mx-0.5">→</span> {report.newVolume}g
                      </span>
                      {/* 감소율이 0보다 클 때만 빨간 뱃지를 띄워줍니다 */}
                      {report.decreaseRate > 0 && (
                        <span className="bg-[#fb3748] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                          -{report.decreaseRate}% 용량 감소
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="font-black text-[18px]">{report.price}원</span>
                </div>
                <p className="text-[13px] text-gray-700 mt-1">{report.content}</p>
                <span className="text-[11px] text-gray-400 mt-1">{report.time}</span>
              </div>
            ))}
          </div>

          {/* 오른쪽: 제보하기 버튼 */}
          <div 
            onClick={onOpenModal}
            className="w-[280px] shrink-0 bg-[#01a7fb] hover:bg-[#0092dd] transition-colors rounded-xl flex flex-col items-center justify-center cursor-pointer text-white shadow-sm"
          >
            <span className="text-4xl font-light mb-2">+</span>
            <span className="font-bold text-[15px]">제보하기</span>
          </div>
        </div>
      </div>
    </section>
  );
}