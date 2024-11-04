// src/components/Header.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Header = () => {
  // Redux에서 사용자 정보를 가져옴 (예시로 user라는 상태가 있다고 가정)
  const user = useSelector((state) => state.user);

  return (
    <StHeader>
      <StLogo>휘래 게시판</StLogo>
      <StUserSection>
        {user ? (
          <StUserInfo>
            <UserImage src={user.profileImage} alt="profile" />
            <UserName>{user.name}</UserName>
          </StUserInfo>
        ) : (
          <LoginButton>로그인</LoginButton>
        )}
      </StUserSection>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  padding-left: 290px;
  padding: 20px 40px;
  margin-right: 1;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const StLogo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a4a4a;
`;

const StUserSection = styled.div`
  display: flex;
  align-items: center;
`;

const StUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-size: 1rem;
  color: #333;
`;

const LoginButton = styled.button`
  background-color: #a1b2d3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #8fa2c1;
  }
`;
