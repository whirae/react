// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoListContainer from './components/TodoListContainer';
import AddForm from './components/AddForm';
import DetailPage from './components/DetailPage';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'; // 회원가입 페이지 추가

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <AddForm />
              <TodoListContainer />
            </Layout>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Layout>
              <DetailPage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUpPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
