// src/components/LoginPage.jsx

import React, { useState } from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>로그인</h2>
        <Input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">로그인</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 변경: min-height로 화면 높이에 맞추기 */
  background-color: #f5f5f5;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #a1b2d3;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #a1b2d3;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #8fa2c1;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 0.9rem;
  margin-top: 10px;
`;
