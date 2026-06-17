import styled from "styled-components";

export const Container = styled.div`
  background: var(--Colors-Neutral-100, #F6F7F8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 139px 202px 140px;
`;

export const Body = styled.div`
  margin-top: 12px;
  display: flex;
`;

export const Contents = styled.div`
  width: 768px;
  margin-right: 32px;
`;

export const CommentBox = styled.div`
  margin-top: 60px;
  .CommentTitle {
    color: #1A1C1E;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.12px;
    margin-bottom: 24px;
  }
`;

export const SideBar = styled.div`
  width: 316px;
  height: fit-content;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);

  .SideBarTitle {
    color: #1A1C1E;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.12px;
    margin-bottom: 12px;
  }
`;

export const SideBarItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;