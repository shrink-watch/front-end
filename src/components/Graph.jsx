import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const GraphContainer = styled.div`
  width: 100%;
  height: 360px;
  background-color: #1A1C1E;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h3`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const FilterBtn = styled.button`
  background-color: ${props => props.active ? "white" : "transparent"};
  color: ${props => props.active ? "black" : "white"};
  border: 1px solid ${props => props.active ? "white" : "#51555D"};
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 13px;
  cursor: pointer;
  font-weight: 600;
`;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', padding: '8px', borderRadius: '4px', color: '#000', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{label}</p>
        <p style={{ margin: 0 }}>{payload[0].value.toLocaleString()}원</p>
      </div>
    );
  }
  return null;
};

const Graph = ({ chartData }) => {
  const [range, setRange] = useState('3개월');

  // 백엔드 데이터가 없을 때를 대비한 안전장치
  const dataToRender = chartData && chartData.length > 0 ? chartData : [
    { date: '1월', unit_price: 8000 },
    { date: '2월', unit_price: 8500 },
    { date: '3월', unit_price: 10000 },
  ];

  return (
    <GraphContainer>
      <Header>
        <Title>그래프</Title>
        <ButtonGroup>
          <FilterBtn active={range === '3개월'} onClick={() => setRange('3개월')}>3개월</FilterBtn>
          <FilterBtn active={range === '6개월'} onClick={() => setRange('6개월')}>6개월</FilterBtn>
          <FilterBtn active={range === '12개월'} onClick={() => setRange('12개월')}>12개월</FilterBtn>
        </ButtonGroup>
      </Header>
      <div style={{ flex: 1, width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dataToRender}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis 
                dataKey="date" 
                stroke="#888" 
                tick={{ fill: '#888', fontSize: 12 }} 
                tickLine={false} 
                axisLine={false} 
            />
            <YAxis 
                stroke="#888" 
                tick={{ fill: '#888', fontSize: 12 }} 
                tickLine={false} 
                axisLine={false} 
                domain={['auto', 'auto']} 
                tickFormatter={(val) => val.toLocaleString()} 
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
                type="monotone" 
                dataKey="unit_price" 
                stroke="#01A7FB" 
                strokeWidth={3} 
                dot={{ r: 4, fill: "#01A7FB", strokeWidth: 2, stroke: "#1A1C1E" }} 
                activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GraphContainer>
  );
};

export default Graph;