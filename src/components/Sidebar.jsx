import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Menu>
        <MenuItem>
          <Link to="/">홈</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/login">로그인</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/signup">회원가입</Link>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #a1b2d3;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const MenuItem = styled.li`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 1.1rem;
  color: #ffffff;

  a {
    color: #ffffff;
    text-decoration: none;
    width: 100%;
    display: block;
  }

  &:hover {
    background-color: #8fa2c1;
    cursor: pointer;
  }
`;
