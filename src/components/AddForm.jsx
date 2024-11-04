import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import styled from 'styled-components';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === '') {
      alert('제목을 입력하세요.');
      return;
    }
    if (title.length < 10) {
      alert('제목은 10자 이상 입력해야 합니다.');
      return;
    }
    if (content === '') {
      alert('내용을 입력하세요.');
      return;
    }

    dispatch(
      addTodo({
        id: todos.length + 1,
        title,
        content,
      })
    );

    setTitle('');
    setContent('');
  };

  return (
    <StBackground>
      <StFormContainer>
        <StLabel>게시글을 입력하세요</StLabel>
        <StInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <StTextarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
        <StButton type="submit" onClick={onSubmitHandler}>
          추가하기
        </StButton>
      </StFormContainer>
    </StBackground>
  );
};

export default AddForm;

const StBackground = styled.div`
  /* background-color: #f5f7fa; */
  /* padding: 40px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-left: 30px;
  max-width: 1060px; */
`;

const StFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-left: 30px;
  gap: 16px;
  padding: 20px;
  width: 100%;
  max-width: 1100px; /* 전체 너비 조정 */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* 약간의 그림자 효과 */
`;

const StLabel = styled.label`
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
`;

const StButton = styled.button`
  border: none;
  background-color: #a1b2d3;
  color: #ffffff;
  height: 40px;
  width: 100%;
  max-width: 120px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #8fa2c1;
  }
`;

const StInput = styled.input`
  border: 1px solid #ddd;
  width: 100%;
  max-width: 320px;
  height: 35px;
  border-radius: 8px;
  padding: 0 10px;
  outline: none;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #a1b2d3;
  }
`;

const StTextarea = styled.textarea`
  border: 1px solid #ddd;
  width: 100%;
  max-width: 320px;
  height: 120px;
  border-radius: 8px;
  padding: 10px;
  outline: none;
  resize: none;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #a1b2d3;
  }
`;
