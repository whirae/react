import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TodoListContainer = () => {
  const navigate = useNavigate();
  const { todos } = useSelector((state) => state.todos);

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <StTodos>
      {todos.map((todo) => (
        <StTodo key={todo.id} onClick={() => handleCardClick(todo.id)}>
          <StHeader>
            <StUserInfo/>
          </StHeader>
          <StTitle>{todo.title}</StTitle>
          <StContent>{todo.content.slice(0, 100)}...</StContent>
        </StTodo>
      ))}
    </StTodos>
  );
};

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
`;

const StTodo = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const StHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const StUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const StContent = styled.div`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`;
