import React from 'react';

// 상품 정보를 'props'로 넘겨받아서 카드를 찍어내는 틀입니다.
function ProductCard({ imageUrl, title, price, unitPrice, rating, reviews }) {
  return (
    <div className="w-[148px] h-[259px] p-[12px] bg-white rounded-lg border border-slate-200 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      
      {/* 1. 이미지 영역 (132x132) */}
      <div className="w-[132px] h-[132px] p-[8px] bg-neutral-100 rounded flex items-center justify-center relative">
        {/* 역대 최저가 뱃지 */}
        <div className="absolute top-2 left-2 bg-slate-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          역대최저가
        </div>
        {/* 실제 만두 이미지 */}
        <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* 2. 상품 정보 텍스트 영역 */}
      <div className="flex flex-col gap-1">
        {/* 상품명 (16px, 굵기 600) */}
        <h3 className="font-semibold text-[16px] text-slate-800 tracking-tight truncate">
          {title}
        </h3>
        
        {/* 가격 (크게) */}
        <p className="font-bold text-lg text-slate-900">
          {price.toLocaleString()}원
        </p>

        {/* 100g당 가격 & 슈링크 방어율 뱃지 */}
        <div className="flex items-center justify-between mt-1">
          <span className="text-[11px] text-slate-500">100g당 {unitPrice}원</span>
          <span className="bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            0%
          </span>
        </div>

        {/* 별점과 리뷰 수 */}
        <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
          <span className="text-yellow-400">★</span>
          <span>{rating}</span>
          <span>({reviews.toLocaleString()})</span>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;