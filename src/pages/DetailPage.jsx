import { useParams, useNavigate } from 'react-router-dom';
import dumplingImg from '../assets/dumpling.png';

const mockProducts = [
  { id: 1, category: '냉동식품', name: '국민냉동만두 10개입', price: '10,000원', unitPrice: '100g당 468원', rating: '4.7 (2,110)', rate: 0, isLowest: true },
  { id: 2, category: '냉동식품', name: '비비고 찐만두 5개입', price: '8,500원', unitPrice: '100g당 520원', rating: '4.5 (1,230)', rate: 0, isLowest: true },
  { id: 3, category: '냉동식품', name: '풀무원 얇은피 만두 아주 길어지는 메뉴 이름 테스트', price: '9,200원', unitPrice: '100g당 490원', rating: '4.6 (3,200)', rate: 5, isLowest: true },
  { id: 4, category: '냉동식품', name: '고기 가득 물만두', price: '8,900원', unitPrice: '100g당 550원', rating: '4.5 (820)', rate: 0, isLowest: true },
  { id: 5, category: '냉동식품', name: '고향만두 1.2kg', price: '11,000원', unitPrice: '100g당 410원', rating: '4.8 (5,100)', rate: 12, isLowest: true },
  { id: 6, category: '건강식품', name: '멀티 비타민 골드', price: '25,000원', unitPrice: '1정당 416원', rating: '4.9 (540)', rate: 0, isLowest: false },
  { id: 7, category: '생수/음료/주류', name: '삼다수 2L x 6병', price: '6,200원', unitPrice: '1L당 516원', rating: '4.8 (12,500)', rate: 0, isLowest: true },
  { id: 101, category: '냉동식품', name: '국민냉동만두 10개입', price: '10,000원', unitPrice: '100g당 468원', rating: '4.7 (2,110)', rate: 1, isLowest: false },
  { id: 102, category: '냉동식품', name: '국민냉동만두 10개입', price: '10,000원', unitPrice: '100g당 468원', rating: '4.7 (2,110)', rate: 2, isLowest: false },
  { id: 103, category: '냉동식품', name: '국민냉동만두 10개입', price: '10,000원', unitPrice: '100g당 468원', rating: '4.7 (2,110)', rate: 4, isLowest: false },
  { id: 104, category: '냉동식품', name: '국민냉동만두 10개입', price: '10,000원', unitPrice: '100g당 468원', rating: '4.7 (2,110)', rate: 5, isLowest: false },
  { id: 105, category: '냉동식품', name: '국민냉동만두 10개입', price: '10,000원', unitPrice: '100g당 468원', rating: '4.7 (2,110)', rate: 4.2, isLowest: false },
  { id: 106, category: '냉동식품', name: '국민냉동만두 10개입', price: '10,000원', unitPrice: '100g당 468원', rating: '4.7 (2,110)', rate: 2.1, isLowest: false }
];

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">상품을 찾을 수 없습니다.</h2>
        <button onClick={() => navigate(-1)} className="text-[#01a7fb] font-bold hover:underline">
          뒤로 가기
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl px-6 flex flex-col gap-6 mt-10 mb-20 mx-auto">
      <button onClick={() => navigate(-1)} className="text-gray-500 font-bold hover:text-black w-fit flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        뒤로 가기
      </button>
      
      <div className="bg-white rounded-[20px] p-10 shadow-sm flex gap-12 border border-gray-100">
        <div className="w-[350px] h-[350px] bg-[#F1F3F5] rounded-xl flex items-center justify-center shrink-0 overflow-hidden relative">
          {product.isLowest && (
            <div className="absolute top-4 left-4 bg-[#51555D] text-white text-[12px] font-bold px-3 py-1.5 rounded-full z-10">
              역대최저가
            </div>
          )}
          <img src={dumplingImg} alt={product.name} className="w-[80%] h-[80%] object-cover drop-shadow-md" />
        </div>
        
        <div className="flex flex-col flex-1 py-4">
          <span className="text-[14px] text-[#01a7fb] font-bold mb-2">{product.category}</span>
          <h2 className="text-[32px] font-black text-gray-800 mb-2 leading-tight">{product.name}</h2>
          <div className="flex items-center gap-2 mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span className="text-gray-500 text-[14px] font-medium">{product.rating}</span>
            <span className={`${product.rate > 0 ? 'bg-[#fb3748]' : 'bg-black'} text-white text-[11px] px-2 py-0.5 rounded font-bold flex items-center gap-0.5 ml-2`}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>
              {product.rate}%
            </span>
          </div>
          
          <div className="flex items-end gap-3 mb-10">
            <span className="text-[36px] font-black leading-none">{product.price}</span>
            <span className="text-[15px] text-gray-500 mb-1">{product.unitPrice}</span>
          </div>
          
          <div className="w-full h-[200px] bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 font-medium">
            여기에 가격 및 용량 변화 그래프가 들어갈 예정입니다.
          </div>
        </div>
      </div>
    </div>
  );
}