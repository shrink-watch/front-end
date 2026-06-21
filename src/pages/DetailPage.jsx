import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as D from "../styles/StyledDetailPage";
import CommentItem from "../components/CommentItem";
import SelectedItem from "../components/SelectedItem";
import SideBarItems from "../components/SideBarItems";
import Graph from "../components/Graph";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        const data = response.data;
        
        // 🔥 프론트엔드와 백엔드의 변수명 차이(스네이크/카멜 케이스)를 모두 방어하는 완벽한 맵핑!
        const mappedProduct = {
          id: data.id,
          name: data.name,
          category: data.categoryName,
          imageUrl: data.imageUrl || data.image_url, 
          price: data.price.toLocaleString() + '원', 
          unitPrice: data.unitPriceText || data.unit_price_text,
          rating: data.rating ? `${data.rating} (검증완료)` : '별점 없음', 
          rate: data.inflationRate || data.inflation_rate || 0, // 0% 에러 해결!
          isLowest: data.isDetected || data.is_detected, 
          chartData: data.chartData, 
          alternativeProducts: data.alternativeProducts
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
          {/* 상단 메인 상품 정보 */}
          <SelectedItem product={product} />
          
          {/* 가격 변동 그래프 */}
          <Graph chartData={product.chartData} />
          
          <D.CommentBox>
            <div className="CommentTitle">댓글</div>
            <CommentItem />
            <CommentItem />
          </D.CommentBox>
        </D.Contents>

        <D.SideBar>
          <div className="SideBarTitle">착한 대안상품</div>
          <D.SideBarItemList>
            {/* 🔥 백엔드에서 받은 대안상품 데이터를 반복문으로 출력! */}
            {product.alternativeProducts && product.alternativeProducts.length > 0 ? (
              product.alternativeProducts.map((altItem, index) => (
                <SideBarItems key={altItem.id || index} item={altItem} />
              ))
            ) : (
              <div className="w-full text-center py-10 text-gray-400 text-sm font-medium bg-[#F8F9FA] rounded-lg mt-2">
                현재 등록된 착한 대안상품이 없습니다.
              </div>
            )}
          </D.SideBarItemList>
        </D.SideBar>
      </D.Body>
    </D.Container>
  );
};

export default Detail;