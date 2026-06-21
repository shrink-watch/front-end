import React from "react";
import styled from "styled-components";
import dumplingImg from '../assets/dumpling.png';

export const ContainerBox = styled.div`
  display: flex;
  width: 292px;
  padding: 12px;
  align-items: center;
  gap: 12px;
`;

export const InfoRateBox = styled.div`
  width: 196px;
  display: flex;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.div`
  color: var(--Colors-Neutral-800, #3A3C41);
  margin-bottom: 4px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ItemCost = styled.div`
  color: var(--Colors-Neutral-900, #222326);
  margin-bottom: 4px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
`;

export const ItemPerCost = styled.div`
  color: var(--Colors-Neutral-700, #51555D);
  margin-bottom: 4px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
`;

// 🔥 백엔드 데이터를 받는 바구니 { item }
function SideBarItems({ item }) {
  if (!item) return null;

  // 가격이 숫자일 경우 콤마 처리
  const priceText = typeof item.price === 'number' 
    ? item.price.toLocaleString() + '원' 
    : item.price;

  return (
    <ContainerBox>
      {/* 백엔드에서 대안상품 이미지 주소(imageUrl)를 주면 띄우고, 없으면 기본 만두 이미지 사용 */}
      <div className="w-[84px] h-[84px] bg-[#F1F3F5] rounded-md shrink-0 flex items-center justify-center overflow-hidden">
        <img 
          src={item.imageUrl || item.image_url || dumplingImg} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <InfoRateBox>
        <InfoBox>
          <ItemName>{item.name}</ItemName>
          <ItemCost>{priceText}</ItemCost>
          <ItemPerCost>{item.unitPrice || item.unit_price_text}</ItemPerCost>
        </InfoBox>
        <span className="bg-black text-white text-[10px] px-1.5 py-0.5 rounded h-fit font-bold flex items-center shrink-0">
          0%
        </span>
      </InfoRateBox>
    </ContainerBox>
  );
}

export default SideBarItems;