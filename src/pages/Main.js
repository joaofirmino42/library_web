import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PasswordPage from '../pages/PasswordPage';
import GetUsers from '../pages/getUsers';
import GetBooks from './getBooks';
const Main = () => (
    <div className="container mt-4">
        <Routes>
            <Route path="/" exact element={<LoginPage />} />
            <Route path="/create-account" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<PasswordPage />} />
            <Route path="/get-users" element={<GetUsers />} />
            <Route path="/get-books" element={<GetBooks />} />
        </Routes>
    </div>
)
export default Main;