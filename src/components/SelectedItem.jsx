import React from "react";
import styled from "styled-components";
import dumplingImg from '../assets/dumpling.png';

export const ItemContainer = styled.div`
  width: 768px;
  height: 360px;
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const ItemImg = styled.div`
  display: flex;
  position: relative;
  img {
    height: 360px;
    width: 360px;
    border-radius: 8px;
    flex-shrink: 0;
    object-fit: cover;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20.5px;
  z-index: 10;
  height: 44px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--Colors-Red-200, #D5153E);
  color: #FFF;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
`;

export const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemInfo = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  gap: 8px;
`;

export const ItemName = styled.div`
  color: #1A1C1E;
  width: 365px;
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 700;
  line-height: 150%; 
`;

export const ItemCost = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  align-items: center;
  color: #1A1C1E;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
`;

export const ItemPerCost = styled.div`
  width: 365px;
  color: var(--Colors-Neutral-700, #51555D);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
`;

export const ItemRate = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--Colors-Neutral-600, #717681);
  font-family: Pretendard;
  font-size: 18px;
`;

export const BuyBtn = styled.div`
  width: 221px;
  height: 24px;
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--Colors-Primary-400, #01A7FB);
  cursor: pointer;
  color: #FFF;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
`;

function SelectedItem({ product }) {
  if (!product) return null;

  const handleCoupangClick = () => {
    window.open(`https://www.coupang.com/np/search?q=${product.name}`, "_blank");
  };

  return (
    <ItemContainer>
      <ItemImg>
        <img src={dumplingImg} alt="product" className="w-[360px] h-[360px] rounded-lg object-cover" />
        {product.isLowest && <ImageOverlay>역대 최저가</ImageOverlay>}
      </ItemImg>
      <ItemInfoBox>
        <ItemInfo>
          <ItemName>{product.name}</ItemName>
          <ItemCost>
            {product.price}
            <span className={`${product.rate > 0 ? 'bg-[#fb3748]' : 'bg-black'} text-white text-[12px] px-2 py-1 rounded font-bold flex items-center gap-0.5 ml-2`}>
              ~ {product.rate}%
            </span>
          </ItemCost>
          <ItemPerCost>{product.unitPrice}</ItemPerCost>
          <ItemRate>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            {product.rating}
          </ItemRate>
        </ItemInfo>
        
        <BuyBtn onClick={handleCoupangClick}>최저가로 사러 가기</BuyBtn>

      </ItemInfoBox>
    </ItemContainer>
  );
}

export default SelectedItem;