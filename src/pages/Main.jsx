import React from 'react';

function Main() {
  return (
    <div className="flex min-h-screen bg-neutral-100 text-slate-800">
      {/* 📂 왼쪽 사이드바: 카테고리 영역 */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col gap-4">
        <div className="font-bold text-lg mb-4 text-primary-400">카테고리</div>
        <nav className="flex flex-col gap-2">
          {/* 배열 안의 텍스트를 돌면서 버튼을 생성합니다. 첫 번째 요소에만 파란색 활성화 스타일을 줍니다. */}
          {['냉동식품', '건강식품', '헬스/다이어트', '생수/음료/주류', '커피/원두/차'].map((category, index) => (
            <button
              key={category}
              className={`text-left px-3 py-2 rounded ${index === 0 ? 'bg-slate-100 font-medium text-primary-400' : 'hover:bg-slate-50'}`}
            >
              {category}
            </button>
          ))}
        </nav>
      </aside>

      {/* 🚀 오른쪽 메인 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col">
        
        {/* 🔍 상단 헤더 및 검색창 */}
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
          <div className="font-extrabold text-xl tracking-tight text-primary-400">SHRINK WATCH</div>
          <div className="w-96">
            <input
              type="text"
              placeholder="제품명이나 바코드 번호를 입력해보세요."
              className="w-full px-4 py-2 bg-slate-100 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-primary-400 text-sm"
            />
          </div>
          <div className="w-8"></div>
        </header>

        {/* 📱 메인 콘텐츠 스크롤 영역 */}
        <main className="p-8 flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            
            {/* 🛡️ 지갑 방어 계산기 배너 */}
            <section className="bg-primary-400 text-white rounded-2xl p-6 shadow-sm flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold mb-1">지갑 방어 계산기</h2>
                <p className="text-sm opacity-90">내가 자주 사는 상품의 연간 물가상승률</p>
              </div>
              <div className="text-3xl font-black">8%</div>
            </section>

            {/* 🎁 가격동결 추천 상품 리스트 */}
            <section>
              <h3 className="font-bold text-lg mb-4">가격동결! 슈링크플레이션이 적은 추천 상품</h3>
              <div className="grid grid-cols-5 gap-4">
                {/* 임시로 5개의 빈 카드를 만들어줍니다. */}
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="w-full aspect-square bg-slate-100 rounded-lg mb-3"></div>
                    <h4 className="font-semibold text-sm truncate">국민 냉동만두</h4>
                    <p className="text-xs text-slate-400 mb-2">100g당 690원</p>
                    <p className="font-bold text-sm text-primary-400">10,000원</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;