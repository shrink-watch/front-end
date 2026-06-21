import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // ⭐️ axios 추가!
import * as D from "../styles/StyledDetailPage";
import CommentItem from "../components/CommentItem";
import SelectedItem from "../components/SelectedItem";
import SideBarItems from "../components/SideBarItems";
import Graph from "../components/Graph";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // ⭐️ 백엔드에서 받아올 진짜 데이터를 담을 상태
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // ⭐️ 페이지가 열릴 때 백엔드 API 호출
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        const data = response.data;
        
        // 백엔드의 필드명을 프론트엔드 기존 컴포넌트(SelectedItem 등)에 맞게 맵핑
        const mappedProduct = {
          id: data.id,
          name: data.name,
          category: data.categoryName,
          price: data.price.toLocaleString() + '원', // 숫자를 콤마+원 문자열로 변환
          unitPrice: data.unit_price_text,
          rating: data.rating ? `${data.rating} (검증완료)` : '별점 없음', 
          rate: data.inflation_rate || 0,
          isLowest: data.is_detected, // 슈링크플레이션 감지 여부
          chartData: data.chartData, // 나중에 Graph 컴포넌트에 넘겨줄 데이터
          alternativeProducts: data.alternativeProducts // 나중에 SideBarItems에 넘겨줄 데이터
        };

        setProduct(mappedProduct);
        setLoading(false);
      } catch (error) {
        console.error("상품 상세 정보를 불러오는 데 실패했습니다.", error);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  // 로딩 중이거나 데이터를 못 찾았을 때의 화면 처리
  if (loading) return <div className="w-full text-center mt-20 font-bold text-gray-500">데이터를 불러오는 중입니다...</div>;
  if (!product) return <div className="w-full text-center mt-20 font-bold text-gray-500">상품 정보를 찾을 수 없습니다.</div>;

  return (
    <D.Container>
      <div className="w-full max-w-6xl mt-8 mb-4">
        <button onClick={() => navigate(-1)} className="text-gray-500 font-bold hover:text-black flex items-center gap-2">
          ← 뒤로 가기
        </button>
      </div>

      <D.Body>
        <D.Contents>
          {/* 🔥 백엔드에서 받아온 진짜 데이터를 SelectedItem으로 전달! */}
          <SelectedItem product={product} />
          
          {/* 나중에 product.chartData를 Graph 컴포넌트로 넘겨주면 됩니다 */}
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
            {/* 나중에 product.alternativeProducts 데이터를 map으로 돌리면 됩니다 */}
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