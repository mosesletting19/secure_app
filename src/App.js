import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import TestComponent from'./components/TestComponent'
import AdminPage from './pages/AdminPage';
import FarmerPage from './pages/FarmerPage';
import FoodStaffPage from './pages/FoodStaffPage';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
        <Route path="/farmer" element={<ProtectedRoute><FarmerPage /></ProtectedRoute>} />
        <Route path="/foodstaff" element={<ProtectedRoute><FoodStaffPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
