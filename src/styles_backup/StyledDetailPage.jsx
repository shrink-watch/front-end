import styled from "styled-components";

export const Container = styled.div`
    background: #FFF;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding-top: 80px;
`;

export const Logo = styled.div`
    img {
        width: 138px;
        aspect-ratio: 46/39;
        margin: 0 39px;
    };

    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 5.12px;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SearchNavBox = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 944px;
    height: 48px;
    padding: 12px 24px;
    align-items: center;
    gap: 24px;
    border-radius: 9999px;
    background: var(--Colors-Neutral-200, #DDE2EB);
`;

export const SearchNav = styled.input`
    outline: none;
    border: 0px;
    background: var(--Colors-Neutral-200, #DDE2EB);
    width: 944px;
    height: 19px;

    ::placeholder {
        color: var(--Colors-Neutral-800, #3A3C41);
        /* Detail_m */
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        letter-spacing: -0.08px;
}
`;

export const Body = styled.div`
    margin-top: 12px;
`;
    
export const Contents = styled.div`
    margin-right: 32px;
    
`;

export const Item = styled.div`


`;

export const Graph = styled.div`
`;

export const CommentBox = styled.div`
`;

export const SideBar = styled.div`
    padding: 20px;
`;