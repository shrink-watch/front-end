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
        
        const mappedProduct = {
          id: data.id,
          name: data.name,
          category: data.categoryName,
          price: data.price.toLocaleString() + '원',
          unitPrice: data.unit_price_text,
          rating: data.rating ? `${data.rating} (검증완료)` : '별점 없음',
          rate: data.inflation_rate || 0,
          isLowest: data.is_detected,
          chartData: data.chartData,
          alternativeProducts: data.alternativeProducts
        };

        setProduct(mappedProduct);
        setLoading(false);
      } catch (error) {
        console.error(error);
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
          <SelectedItem product={product} />
          
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