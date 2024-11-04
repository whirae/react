// Action value
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const EDIT_TODO = 'EDIT_TODO';

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, payload: id };
};

export const editTodo = ({ id, title, content }) => {
  return { type: EDIT_TODO, payload: { id, title, content } };
};
// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: '1번 게시물의 제목입니다.',
      content: `1번 게시물의 내용입니다.
      1번 게시물의 내용입니다.
      1번 게시물의 내용입니다.
      1번 게시물의 내용입니다.
      1번 게시물의 내용입니다.
      1번 게시물의 내용입니다.
      1번 게시물의 내용입니다.`,
    },
    {
      id: 2,
      title: '2번 게시물의 제목입니다.',
      content: `2번 게시물의 내용입니다.
      2번 게시물의 내용입니다.
      2번 게시물의 내용입니다.
      2번 게시물의 내용입니다.
      2번 게시물의 내용입니다.
      2번 게시물의 내용입니다.
      2번 게시물의 내용입니다.`,
    },
    {
      id: 3,
      title: '3번 게시물의 제목입니다.',
      content: '3번 게시물의 내용입니다.',
    },
    {
      id: 4,
      title: '4번 게시물의 제목입니다.',
      content: '4번 게시물의 내용입니다.',
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title, content: action.payload.content }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todos;
