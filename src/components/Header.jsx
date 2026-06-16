export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="w-full bg-[#F6F7F8] flex justify-center py-8">
      <div className="w-full max-w-6xl flex items-center gap-12 px-6">
        {/* 로고를 누르면 검색어가 비워지며 초기화됩니다 */}
        <div 
          className="flex flex-col items-center shrink-0 ml-4 cursor-pointer" 
          onClick={() => setSearchQuery('')}
        >
          <span className="text-4xl font-black text-[#01a7fb] tracking-tighter leading-none mb-1">SHRINK</span>
          <span className="text-[10px] font-bold text-black tracking-[0.3em]">WATCH</span>
        </div>
        
        {/* 검색창 */}
        <div className="flex-1 max-w-[800px] bg-[#E9ECEF] rounded-full px-6 py-4 flex items-center shadow-sm">
          <span className="text-gray-500 mr-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            placeholder="제품명이나 바코드 번호를 적어보세요."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent w-full outline-none text-base placeholder-gray-500 text-gray-800"
          />
        </div>
      </div>
    </header>
  );
}