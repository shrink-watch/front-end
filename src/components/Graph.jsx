import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export const GraphContainer = styled.div`
  width: 100%;
  box-sizing: border-box; /* 패딩을 포함해서 너비 계산 */
  height: 311px;
  padding: 24px;
  margin: 60px 0;
  border-radius: 12px;
  background: var(--Colors-Neutral-1000, #0a0a0b);
  overflow: hidden; /* 혹시라도 튀어나가는 요소 방지 */
`;

export const GraphTitle = styled.div`
  width: 100%; /* 고정 픽셀(718px) 삭제하고 100%로 변경! */
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
`;

export const GraphSelectList = styled.div`
  display: flex;
  gap: 20px;
  padding: 3px 10px;
  position: relative;
  color: var(--Colors-Neutral-300, #CBD1DC);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
`;

export const GraphSelect = styled.div`
  padding: 3px 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: color 0.2s ease;
  color: ${({ active }) => (active ? "#000" : "#CBD1DC")};
  z-index: 1;
`;

export const GraphSlider = styled.div`
  position: absolute;
  top: 3px;
  height: calc(100% - 6px);
  border-radius: 9999px;
  background: var(--Colors-Neutral-100, #F6F7F8);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 0;
`;

export const GraphContent = styled.div`
  width: 100%; /* 고정 픽셀 삭제 */
  height: 254px;
  margin-top: 20px;
  background: #1a1a1a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

// ... 아래 function Graph() 부분은 그대로 두시면 됩니다! ...

function Graph() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const btnRefs = useRef([]);

  useEffect(() => {
    const currentBtn = btnRefs.current[activeIndex];
    if (currentBtn) {
      const parentOffset = currentBtn.parentElement.getBoundingClientRect().left;
      const btnRect = currentBtn.getBoundingClientRect();
      setSliderStyle({
        left: btnRect.left - parentOffset,
        width: btnRect.width,
      });
    }
  }, [activeIndex]);

  return (
    <GraphContainer>
      <GraphTitle>
        그래프
        <GraphSelectList>
          <GraphSlider style={sliderStyle} />
            {["3개월", "6개월", "12개월"].map((label, idx) => (
                <GraphSelect
                    key={label}
                    ref={(el) => (btnRefs.current[idx] = el)}
                    active={activeIndex === idx}
                    onClick={() => setActiveIndex(idx)}
                    >{label}</GraphSelect>
            ))}
        </GraphSelectList>
      </GraphTitle>
      <GraphContent>
        {activeIndex === 0 && "3개월 데이터"}
        {activeIndex === 1 && "6개월 데이터"}
        {activeIndex === 2 && "12개월 데이터"}
      </GraphContent>
    </GraphContainer>
  );
}

export default Graph;