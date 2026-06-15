import { Link } from 'react-router-dom';
import dumplingImg from '../assets/dumpling.png';

const categories = [
  {
    name: '냉동식품',
    icon: (
      <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41667 14.9168L6.375 12.8335L4.08333 13.2501M7.41667 1.58346L6.375 3.66679L4.08333 3.25012M10.75 14.9168L11.7917 12.8335L14.0833 13.2501M10.75 1.58346L11.7917 3.66679L14.0833 3.25012M13.25 15.7501L10.75 10.7501M10.75 10.7501H7.41667M10.75 10.7501L12 8.25012M7.41667 10.7501L4.91667 15.7501M7.41667 10.7501L6.16667 8.25012M13.25 0.750122L10.75 5.75012M10.75 5.75012L12 8.25012M10.75 5.75012H7.41667M12 8.25012H17.4167M0.75 8.25012H6.16667M6.16667 8.25012L7.41667 5.75012M7.41667 5.75012L4.91667 0.750122M15.75 6.58346L14.5 8.25012L15.75 9.91679M2.41667 6.58346L3.66667 8.25012L2.41667 9.91679" stroke="#51555D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: '건강식품',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_245_461)">
          <path d="M7.08333 7.0833L12.9167 12.9166M8.75 17.0833L17.0833 8.74996C17.4727 8.36836 17.7826 7.91334 17.9951 7.41123C18.2075 6.90912 18.3183 6.36987 18.3211 5.82467C18.3238 5.27946 18.2185 4.73913 18.0111 4.23489C17.8037 3.73066 17.4985 3.27254 17.1129 2.88702C16.7274 2.5015 16.2693 2.19623 15.7651 1.98886C15.2608 1.78149 14.7205 1.67613 14.1753 1.67889C13.6301 1.68164 13.0908 1.79245 12.5887 2.0049C12.0866 2.21735 11.6316 2.52723 11.25 2.91663L2.91667 11.25C2.52727 11.6316 2.21739 12.0866 2.00494 12.5887C1.79248 13.0908 1.68168 13.6301 1.67892 14.1753C1.67617 14.7205 1.78152 15.2608 1.98889 15.765C2.19626 16.2693 2.50153 16.7274 2.88706 17.1129C3.27258 17.4984 3.7307 17.8037 4.23493 18.0111C4.73916 18.2184 5.2795 18.3238 5.82471 18.321C6.36991 18.3183 6.90915 18.2075 7.41127 17.995C7.91338 17.7826 8.36839 17.4727 8.75 17.0833Z" stroke="#51555D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_245_461">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: '헬스/다이어트',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.83333 17.5001H14.1667M9.48333 10.0001C8.97864 10.0048 8.49082 9.81847 8.11773 9.47855C7.74464 9.13863 7.51387 8.67022 7.47169 8.16727C7.42951 7.66432 7.57906 7.16402 7.89032 6.76671C8.20159 6.3694 8.65157 6.10447 9.15 6.02506C9.0702 5.67191 9.08775 5.30373 9.20079 4.95978C9.31383 4.61583 9.51811 4.30902 9.79185 4.07206C10.0656 3.83511 10.3985 3.67691 10.7551 3.61432C11.1117 3.55174 11.4786 3.58714 11.8167 3.71672C11.9647 3.48369 12.1594 3.28383 12.3884 3.12972C12.6175 2.97561 12.876 2.87059 13.1476 2.82128C13.4192 2.77196 13.6981 2.77942 13.9667 2.84317C14.2353 2.90692 14.4878 3.0256 14.7083 3.19172C15.093 2.88941 15.5751 2.73856 16.0634 2.76772C16.5518 2.79688 17.0125 3.00402 17.3584 3.34995C17.7044 3.69588 17.9115 4.15661 17.9407 4.64496C17.9698 5.13332 17.819 5.61542 17.5167 6.00006C17.7048 6.25 17.8317 6.5406 17.8872 6.8485C17.9426 7.1564 17.9251 7.47301 17.8359 7.7729C17.7468 8.07278 17.5885 8.34756 17.3739 8.57516C17.1592 8.80277 16.8942 8.97684 16.6 9.08339C16.676 9.38333 16.6846 9.69641 16.625 10.0001M10.8333 10.0001L14.1667 6.66672M9.08333 6.04172C8.62624 5.55445 8.03296 5.21617 7.38081 5.07099C6.72867 4.92581 6.04791 4.98046 5.42728 5.22781C4.80664 5.47517 4.27492 5.90375 3.90141 6.45771C3.52791 7.01166 3.32995 7.66529 3.33333 8.33339C3.33333 8.94172 3.5 9.50839 3.78333 10.0001M10 17.5001C11.9891 17.5001 13.8968 16.7099 15.3033 15.3034C16.7098 13.8968 17.5 11.9892 17.5 10.0001H2.5C2.5 11.9892 3.29018 13.8968 4.6967 15.3034C6.10322 16.7099 8.01088 17.5001 10 17.5001Z" stroke="#51555D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: '생수/음료/주류',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10L3.50583 3.50583C3.42341 3.42344 3.36728 3.31845 3.34453 3.20414C3.32179 3.08984 3.33346 2.97136 3.37806 2.86369C3.42266 2.75601 3.4982 2.66399 3.59511 2.59925C3.69202 2.53452 3.80595 2.49998 3.9225 2.5H16.0775C16.194 2.49998 16.308 2.53452 16.4049 2.59925C16.5018 2.66399 16.5773 2.75601 16.6219 2.86369C16.6665 2.97136 16.6782 3.08984 16.6555 3.20414C16.6327 3.31845 16.5766 3.42344 16.4942 3.50583L10 10ZM10 10V18.3333M5.83333 18.3333H14.1667" stroke="#51555D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: '커피/차/다과',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_245_465)">
          <path d="M7.08333 7.08329V7.09163M13.3333 12.9166V12.925M10 9.99996V10.0083M9.16667 14.1666V14.175M5.83333 11.6666V11.675M10 1.66663C8.35182 1.66663 6.74066 2.15537 5.37025 3.07105C3.99984 3.98672 2.93174 5.28821 2.30101 6.81093C1.67027 8.33365 1.50525 10.0092 1.82679 11.6257C2.14833 13.2422 2.94201 14.7271 4.10744 15.8925C5.27288 17.058 6.75774 17.8516 8.37425 18.1732C9.99076 18.4947 11.6663 18.3297 13.189 17.699C14.7117 17.0682 16.0132 16.0001 16.9289 14.6297C17.8446 13.2593 18.3333 11.6481 18.3333 9.99996C17.7542 10.1783 17.1374 10.1954 16.5492 10.0494C15.9611 9.90334 15.4239 9.59975 14.9954 9.17125C14.5669 8.74275 14.2633 8.20554 14.1173 7.61741C13.9713 7.02927 13.9883 6.41245 14.1667 5.83329C13.5875 6.01163 12.9707 6.0287 12.3826 5.88269C11.7944 5.73667 11.2572 5.43309 10.8287 5.00459C10.4002 4.57608 10.0966 4.03888 9.95061 3.45074C9.80459 2.8626 9.82167 2.24578 10 1.66663Z" stroke="#51555D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_245_465">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: '우유/유제품',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_245_466)">
          <path d="M8.33333 18.3333V11.6666M8.33333 11.6666L1.94666 7.40831M8.33333 11.6666L18.0958 5.80914M18.3333 11.6666C18.3333 11.9545 18.2588 12.2374 18.117 12.4878C17.9752 12.7383 17.771 12.9477 17.5242 13.0958L9.19083 18.0958C8.92036 18.2582 8.60935 18.3405 8.29396 18.3331C7.97857 18.3257 7.67175 18.229 7.40916 18.0541L2.40916 14.7208C2.1807 14.5686 1.99338 14.3623 1.86384 14.1202C1.73431 13.8782 1.66658 13.6078 1.66666 13.3333V8.33331C1.66666 8.0455 1.74119 7.76259 1.88299 7.51214C2.02479 7.26168 2.22904 7.05222 2.47583 6.90414L10.8092 1.90414C11.0796 1.74175 11.3906 1.65946 11.706 1.66684C12.0214 1.67421 12.3282 1.77095 12.5908 1.94581L17.5908 5.27914C17.8193 5.43137 18.0066 5.63768 18.1362 5.87974C18.2657 6.1218 18.3334 6.3921 18.3333 6.66664V11.6666Z" stroke="#51555D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_245_466">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: '분유/이유식',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33334 13.3333C8.75 13.5833 9.33334 13.75 10 13.75C10.6667 13.75 11.25 13.5833 11.6667 13.3333M12.5 10H12.5083M16.15 5.6775C16.7343 6.527 17.1371 7.48783 17.3333 8.5C17.6151 8.63647 17.8528 8.84956 18.019 9.11485C18.1853 9.38014 18.2735 9.68691 18.2735 10C18.2735 10.3131 18.1853 10.6199 18.019 10.8851C17.8528 11.1504 17.6151 11.3635 17.3333 11.5C16.9736 13.1779 16.0493 14.6817 14.7147 15.7604C13.3802 16.8392 11.716 17.4277 10 17.4277C8.28397 17.4277 6.61983 16.8392 5.28526 15.7604C3.9507 14.6817 3.02643 13.1779 2.66667 11.5C2.38488 11.3635 2.14724 11.1504 1.98096 10.8851C1.81468 10.6199 1.72649 10.3131 1.72649 10C1.72649 9.68691 1.81468 9.38014 1.98096 9.11485C2.14724 8.84956 2.38488 8.63647 2.66667 8.5C3.01189 6.80875 3.92992 5.28835 5.26586 4.19531C6.6018 3.10226 8.27389 2.50348 10 2.5C11.6667 2.5 12.9167 3.41667 12.9167 4.58333C12.9167 5.75 12.1667 6.66667 11.25 6.66667C10.5833 6.66667 10 6.33333 10 5.83333M7.5 10H7.50834" stroke="#51555D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: '휴지/물티슈',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33333 15V6.00001C3.33333 5.46957 3.50893 4.96087 3.82149 4.58579C4.13405 4.21072 4.55797 4.00001 5 4.00001H11.6667M11.6667 4.00001C11.9307 3.99923 12.1923 4.06122 12.4363 4.18239C12.6803 4.30357 12.9019 4.48153 13.0883 4.70601L16.0783 8.29401C16.2654 8.51768 16.4137 8.78359 16.5147 9.0764C16.6157 9.36921 16.6673 9.68312 16.6667 10M11.6667 4.00001V9.00001C11.6667 9.26522 11.7545 9.51958 11.9107 9.70711C12.067 9.89465 12.279 10 12.5 10H16.6667M16.6667 10V15M1.66666 15H18.3333" stroke="#51555D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: '스포츠/아웃도어',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.91666 17.5L11.6667 2.5M17.0833 17.5L8.33333 2.5M12.9167 17.5L10 12.5L7.08333 17.5M1.66666 17.5H18.3333" stroke="#51555D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: '건강용품',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_245_470)">
          <path d="M3.33334 7.49996C2.89131 7.49996 2.46739 7.67555 2.15483 7.98811C1.84227 8.30068 1.66667 8.7246 1.66667 9.16663V10.8333C1.66667 11.2753 1.84227 11.6992 2.15483 12.0118C2.46739 12.3244 2.89131 12.5 3.33334 12.5H6.66667C6.88769 12.5 7.09965 12.5878 7.25593 12.744C7.41221 12.9003 7.5 13.1123 7.5 13.3333V16.6666C7.5 17.1087 7.6756 17.5326 7.98816 17.8451C8.30072 18.1577 8.72464 18.3333 9.16667 18.3333H10.8333C11.2754 18.3333 11.6993 18.1577 12.0118 17.8451C12.3244 17.5326 12.5 17.1087 12.5 16.6666V13.3333C12.5 13.1123 12.5878 12.9003 12.7441 12.744C12.9004 12.5878 13.1123 12.5 13.3333 12.5H16.6667C17.1087 12.5 17.5326 12.3244 17.8452 12.0118C18.1577 11.6992 18.3333 11.2753 18.3333 10.8333V9.16663C18.3333 8.7246 18.1577 8.30068 17.8452 7.98811C17.5326 7.67555 17.1087 7.49996 16.6667 7.49996H13.3333C13.1123 7.49996 12.9004 7.41216 12.7441 7.25588C12.5878 7.0996 12.5 6.88764 12.5 6.66663V3.33329C12.5 2.89127 12.3244 2.46734 12.0118 2.15478C11.6993 1.84222 11.2754 1.66663 10.8333 1.66663H9.16667C8.72464 1.66663 8.30072 1.84222 7.98816 2.15478C7.6756 2.46734 7.5 2.89127 7.5 3.33329V6.66663C7.5 6.88764 7.41221 7.0996 7.25593 7.25588C7.09965 7.41216 6.88769 7.49996 6.66667 7.49996H3.33334Z" stroke="#51555D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_245_470">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

export default function MainPage() {
  return (
    <div className="w-full max-w-6xl flex px-6 gap-10 mt-4 mb-16">
      <aside className="w-[180px] shrink-0 pt-4 ml-4">
        <div className="font-bold text-black mb-8 text-xl">카테고리</div>
        <ul className="flex flex-col gap-6 text-[15px] font-medium text-gray-400">
          {categories.map((category, index) => (
            <li 
              key={index} 
              className={`flex items-center gap-4 cursor-pointer hover:text-[#01a7fb] transition-colors ${
                index === 0 ? 'text-black font-bold' : ''
              }`}
            >
              <span className={index === 0 ? 'text-[#01a7fb]' : 'text-gray-400'}>
                {category.icon}
              </span>
              {category.name}
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 min-w-0 flex flex-col gap-14">
        <section className="bg-[#0A0A0A] rounded-[20px] p-8 text-white flex items-center border-[3px] border-[#01a7fb] h-[280px]">
          <div className="flex flex-col shrink-0 h-full justify-center min-w-[280px]">
            <div className="flex items-end gap-3 mb-6">
              <h2 className="text-[26px] font-bold leading-none whitespace-nowrap tracking-tight">지갑 방어 계산기</h2>
              <span className="text-[13px] text-gray-400 mb-0.5 whitespace-nowrap">
                내가 자주 쓰는 상품의 <span className="text-[#01a7fb] font-bold">연간 물가상승률</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[64px] font-black text-[#01a7fb] tracking-tighter leading-none mb-1">8%</span>
              <span className="text-[26px] font-bold leading-none mt-2">23,000원</span>
              <span className="text-[13px] text-gray-500 mt-2">작년보다 더 내고 있는 돈</span>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto flex-1 pl-4 h-full items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl p-5 w-[160px] shrink-0 flex flex-col h-[180px] shadow-sm">
                <Link to="/detail" className="text-black font-bold text-[15px] leading-snug mb-1 whitespace-nowrap hover:text-[#01a7fb] hover:underline cursor-pointer">
                  비비고 한우사<br/>골곰탕
                </Link>
                <span className="text-gray-500 text-[13px]">8,200원</span>
                <div className="mt-auto">
                  <span className="bg-black text-white text-[11px] px-2.5 py-1.5 rounded-md font-bold flex items-center w-fit gap-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M23 6l-9.5 9.5-5-5L1 18" />
                      <path d="M17 6h6v6" />
                    </svg>
                    0%
                  </span>
                </div>
              </div>
            ))}
            
            <div className="bg-[#2A2A2A] rounded-xl p-5 w-[160px] shrink-0 flex flex-col items-center justify-center cursor-pointer hover:bg-[#3A3A3A] transition-colors border border-[#444] h-[180px]">
              <span className="text-gray-400 text-3xl font-light mb-2">+</span>
              <span className="text-gray-400 text-[13px] font-bold text-center">자주 사는 물건<br/>추가하기</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col">
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-[22px] font-bold text-black tracking-tight">가격동결! 슈링크플레이션이 적은 추천 상품</h3>
            <span className="text-[14px] text-gray-500 font-medium cursor-pointer hover:text-black">더보기 &gt;</span>
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex flex-col bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
                
                <div className="relative w-full aspect-square bg-[#F1F3F5] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-3 left-3 bg-[#51555D] text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
                    역대최저가
                  </div>
                  <img src={dumplingImg} alt="상품 이미지" className="w-[85%] h-[85%] object-cover drop-shadow-md" />
                </div>

                <div className="flex flex-col">
                  <span className="text-black font-bold text-[14px] leading-snug mb-1">국민냉동만두 10개입</span>
                  <span className="text-black font-black text-[18px] mb-2">10,000원</span>
                  
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-gray-500 text-[12px]">100g당 468원</span>
                    <span className="bg-black text-white text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M23 6l-9.5 9.5-5-5L1 18" />
                        <path d="M17 6h6v6" />
                      </svg>
                      0%
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="text-gray-500 text-[12px] font-medium">4.7 (2,110)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}