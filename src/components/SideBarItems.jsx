import React from "react";
import styled from "styled-components";

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

function SideBarItems() {
  return (
    <ContainerBox>
      <div className="w-[84px] h-[84px] bg-gray-200 rounded-md shrink-0"></div>
      <InfoRateBox>
        <InfoBox>
          <ItemName>대안 만두 상품</ItemName>
          <ItemCost>8,500원</ItemCost>
          <ItemPerCost>10g당 520원</ItemPerCost>
        </InfoBox>
        <span className="bg-black text-white text-[10px] px-1.5 py-0.5 rounded h-fit font-bold">0%</span>
      </InfoRateBox>
    </ContainerBox>
  );
}

export default SideBarItems;