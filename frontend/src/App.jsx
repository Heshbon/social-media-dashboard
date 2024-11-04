import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import dashboard from './assets/images/dashboard.png';

import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import FeedPage from './pages/Dashboard/FeedPage';
import NotificationsPage from './pages/Dashboard/NotificationsPage';
import ProfilePage from './pages/Profile/ProfilePage';
import EditProfilePage from './pages/Profile/EditProfilePage';
import SettingsPage from './pages/Settings/SettingsPage';

function App() {
  return (
    <>
      <div>
        <img src={dashboard} className="logo" alt="Dashboard" />
      </div>
      <h1>Welcome to My Social Media Dashboard</h1>
      <Routes>
        <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<FeedPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;