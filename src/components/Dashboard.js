import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:5000/logout');
            localStorage.removeItem('user');
            navigate('/');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
