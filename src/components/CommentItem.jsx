import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 16px;
  padding: 21px;
  align-items: flex-start;
  gap: 16px;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
`;

const ItemInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.div`
  color: #1A1C1E;
  width: 100%;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const CommentContent = styled.div`
  color: var(--Colors-Neutral-700, #51555D);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
`;

const Time = styled.div`
  color: var(--Colors-Neutral-600, #717681);
  font-family: Pretendard;
  font-size: 14px;
`;

function CommentItem() {
  return (
    <ItemContainer>
      <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
      <ItemInfo>
        <Name>
          소비자
          <span className="text-yellow-400 text-sm">★★★☆☆</span>
        </Name>
        <CommentContent>포장지는 그대로인데 속이 비었네요.</CommentContent>
        <Time>2시간 전</Time>
      </ItemInfo>
    </ItemContainer>
  );
}

export default CommentItem;