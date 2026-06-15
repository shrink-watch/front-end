export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-10 flex justify-center bg-[#F6F7F8]">
      <div className="w-full max-w-6xl px-6 flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-black text-black tracking-tight">슈링크워치</span>
          <span className="text-[13px] text-gray-500">우리는 투명한 가격 정보를 통해 소비자들의 현명한 선택을 돕습니다. 시민들의 제보가 물가 안정을 만듭니다.</span>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="flex gap-4 text-[13px] text-gray-500 font-medium">
            <span className="cursor-pointer hover:text-black">이용약관</span>
            <span className="cursor-pointer hover:text-black font-bold">개인정보처리방침</span>
            <span className="cursor-pointer hover:text-black">고객센터</span>
            <span className="cursor-pointer hover:text-black">제휴문의</span>
          </div>
          <span className="text-[12px] text-gray-400">© 2026 슈링크 WATCH. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}