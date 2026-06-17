import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as D from "../styles/StyledDetailPage";
import CommentItem from "../components/CommentItem";
import SelectedItem from "../components/SelectedItem";
import SideBarItems from "../components/SideBarItems";
import Graph from "../components/Graph";

// 메인페이지와 동일한 가짜 데이터
const mockProducts = [
  { id: 1, category: '냉동식품', name: '국민냉동만두 10개입', price: '10,000원', unitPrice: '100g당 468원', rating: '4.7 (2,110)', rate: 0, isLowest: true },
  { id: 2, category: '냉동식품', name: '비비고 찐만두 5개입', price: '8,500원', unitPrice: '100g당 520원', rating: '4.5 (1,230)', rate: 0, isLowest: true },
  { id: 3, category: '냉동식품', name: '풀무원 얇은피 만두 아주 길어지는 메뉴 이름 테스트', price: '9,200원', unitPrice: '100g당 490원', rating: '4.6 (3,200)', rate: 5, isLowest: true },
  { id: 4, category: '냉동식품', name: '고기 가득 물만두', price: '8,900원', unitPrice: '100g당 550원', rating: '4.5 (820)', rate: 0, isLowest: true },
  { id: 5, category: '냉동식품', name: '고향만두 1.2kg', price: '11,000원', unitPrice: '100g당 410원', rating: '4.8 (5,100)', rate: 12, isLowest: true },
  { id: 6, category: '건강식품', name: '멀티 비타민 골드', price: '25,000원', unitPrice: '1정당 416원', rating: '4.9 (540)', rate: 0, isLowest: false },
  { id: 7, category: '생수/음료/주류', name: '삼다수 2L x 6병', price: '6,200원', unitPrice: '1L당 516원', rating: '4.8 (12,500)', rate: 0, isLowest: true }
];

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // URL에서 번호를 읽어 진짜 상품 찾기
  const product = mockProducts.find((p) => p.id === Number(id));

  return (
    <D.Container>
      <div className="w-full max-w-6xl mt-8 mb-4">
        <button onClick={() => navigate(-1)} className="text-gray-500 font-bold hover:text-black flex items-center gap-2">
          ← 뒤로 가기
        </button>
      </div>

      <D.Body>
        <D.Contents>
          {/* 🔥 찾아낸 데이터를 SelectedItem으로 전달! */}
          <SelectedItem product={product} />
          <Graph />
          <D.CommentBox>
            <div className="CommentTitle">댓글</div>
            <CommentItem />
            <CommentItem />
          </D.CommentBox>
        </D.Contents>

        <D.SideBar>
          <div className="SideBarTitle">착한 대안상품</div>
          <D.SideBarItemList>
            <SideBarItems />
            <SideBarItems />
            <SideBarItems />
          </D.SideBarItemList>
        </D.SideBar>
      </D.Body>
    </D.Container>
  );
};

export default Detail;