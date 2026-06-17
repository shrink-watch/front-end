import React, { useState } from "react";
import styled from "styled-components";
import PasswordModal from "./PasswordModal";

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
  align-items: center;
`;

const CommentContent = styled.div`
  color: var(--Colors-Neutral-700, #51555D);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  margin-top: 4px;
`;

const Time = styled.div`
  color: var(--Colors-Neutral-600, #717681);
  font-family: Pretendard;
  font-size: 14px;
  margin-top: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #717681;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #1A1C1E;
  }
`;

function CommentItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("");

  const handleActionClick = (mode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handlePasswordConfirm = (password) => {
    alert(`${modalMode} 모드 실행: 입력된 비밀번호는 [${password}] 입니다.`);
    setIsModalOpen(false);
  };

  return (
    <>
      <ItemContainer>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
        <ItemInfo>
          <Name>
            <div className="flex items-center gap-2">
              소비자
              <span className="text-yellow-400 text-sm">★★★☆☆</span>
            </div>
            <ButtonGroup>
              <ActionBtn onClick={() => handleActionClick("delete")}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                삭제
              </ActionBtn>
              <ActionBtn onClick={() => handleActionClick("edit")}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z"></path></svg>
                수정
              </ActionBtn>
            </ButtonGroup>
          </Name>
          <CommentContent>포장지는 그대로인데 속이 비었네요. 용량이 줄어든게 확 느껴집니다.</CommentContent>
          <Time>2시간 전</Time>
        </ItemInfo>
      </ItemContainer>

      <PasswordModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handlePasswordConfirm}
        mode={modalMode}
      />
    </>
  );
}

export default CommentItem;