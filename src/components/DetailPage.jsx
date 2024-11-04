import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeTodo, editTodo } from '../redux/modules/todos';

const DetailPage = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todo = todos.find((todo) => todo.id === parseInt(id));
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo ? todo.title : '');
  const [newContent, setNewContent] = useState(todo ? todo.content : '');

  if (!todo) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleSave = () => {
    if (newTitle.trim() && newContent.trim()) {
      dispatch(editTodo({ id: todo.id, title: newTitle, content: newContent }));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
    navigate('/');
  };

  return (
    <StDetailContainer>
      <StPostCard>
        <StUserInfo>
          <span>작성자: {todo.author || '비회원'}</span>
          <StButtonContainer>
            <StButton onClick={handleEditToggle} bgColor="#4B5563">
              수정
            </StButton>
            <StButton onClick={handleDelete} bgColor="#9CA3AF">
              삭제
            </StButton>
          </StButtonContainer>
        </StUserInfo>
        {isEditing ? (
          <>
            <StInput
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
            <StTextarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="내용을 입력하세요"
            />
            <ButtonContainer>
              <StButton
                onClick={handleSave}
                bgColor="#4B5563"
                disabled={!newTitle || !newContent}
              >
                저장
              </StButton>
              <StButton onClick={handleEditToggle} bgColor="#9CA3AF">
                취소
              </StButton>
            </ButtonContainer>
          </>
        ) : (
          <>
            <StTitle>{todo.title}</StTitle>
            <StContent>{todo.content}</StContent>
          </>
        )}
      </StPostCard>
    </StDetailContainer>
  );
};

export default DetailPage;

// Styled Components

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const StDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9fafb;
`;

const StPostCard = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const StUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 10px;
`;

const StButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StTitle = styled.h1`
  font-size: 1.6em;
  font-weight: bold;
  color: #333333;
  margin: 0;
  margin-bottom: 10px;
  text-align: left;
`;

const StContent = styled.p`
  font-size: 1.2em;
  color: #495057;
  white-space: pre-line;
  margin-top: 20px;
`;

const StInput = styled.input`
  width: 97.5%;
  padding: 10px;
  font-size: 1.2em;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
`;

const StTextarea = styled.textarea`
  width: 97.5%;
  height: 150px;
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  resize: none;
`;

const StButton = styled.button`
  background-color: ${({ bgColor }) => bgColor || '#D1D5DB'};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: ${({ bgColor }) =>
      bgColor ? `${bgColor}cc` : '#cbd5e0'};
  }
  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

