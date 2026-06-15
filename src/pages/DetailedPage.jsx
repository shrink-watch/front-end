import React from 'react';

function DetailedPage() {
  return (
    // 전체 화면 높이(min-h-screen)를 차지하고, 내용물을 정중앙에 배치합니다.
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100">
      
      {/* Tailwind의 text-primary-400을 사용해 우리가 지정한 파란색을 적용합니다. */}
      <h1 className="text-3xl font-bold text-primary-400 mb-4">
        상세 페이지 (작업 공간) 🚀
      </h1>
      
      <p className="text-slate-600 font-medium">
        시연님! 여기에 백업해둔 기존 스타일 코드를 Tailwind 방식에 맞춰서 작업해 주시면 됩니다.
      </p>
      
    </div>
  );
}

export default DetailedPage;