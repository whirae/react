// src/components/Layout.jsx
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        <Sidebar /> {/* 왼쪽에 고정된 사이드바 */}
        <MainContent>{children}</MainContent>
      </ContentContainer>
    </AppContainer>
  );
};

export default Layout;

// 전체 레이아웃 스타일링
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #f5f7fa;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`;

// 메인 콘텐츠 영역 스타일링
const MainContent = styled.section`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #ffffff;
`;
