import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { PostProvider } from './context/PostContext';
import Dashboard from "./components/Dashboard/Feed";
import Profile from "./components/Profile/ProfileCard";


const App = () => {
  return (
    <BrowserRouter>
    <PostProvider>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
      </PostProvider>
    </BrowserRouter>
  );
};

export default App;