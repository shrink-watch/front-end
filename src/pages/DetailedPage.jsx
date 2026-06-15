import React from "react";
import { useNavigate } from "react-router-dom";
import * as D from "../styles/StyledDetailPage";


const Detail = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(`/`);
    };

return (
<D.Container>
    <D.Header>
        <D.Logo onClick={goBack}>
            <img
            src={`${process.env.PUBLIC_URL}/images/logo.svg`}
            alt="logo"
            />
            WATCH
        </D.Logo>
        <D.SearchNavBox>
            <img
            src={`${process.env.PUBLIC_URL}/images/search.svg`}
            alt="logo"
            />
            <D.SearchNav placeholder="제품명이나 바코드 번호를 적어보세요."></D.SearchNav>
        </D.SearchNavBox>
    </D.Header>

    <D.Body>
    <D.Contents>
        <D.Item>

        </D.Item>
        <D.Graph>

        </D.Graph>

        <D.CommentBox>

        </D.CommentBox>
    </D.Contents>

    <D.SideBar>

    </D.SideBar>
    </D.Body>
</D.Container>
  );
};

export default Detail;
