import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);  // To handle error messages
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:5000/login',
                { phone_number, password },
                {
                    headers: {
                        'Content-Type': 'application/json'  // Set the correct Content-Type header
                    }
                }
            );
            if (response.status === 200) {
                const { role } = response.data; // Assuming your backend sends back the role
                localStorage.setItem('user', JSON.stringify({ role })); // Save role in localStorage

                // Redirect based on role
                switch (role) {
                    case 'farmer':
                        navigate('/farmer');
                        break;
                    case 'food staff':
                        navigate('/foodstaff');
                        break;
                    case 'admin':
                        navigate('/admin');
                        break;
                    default:
                        navigate('/dashboard'); // Fallback
                }
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error || 'Login failed');
            } else {
                setError('Login failed');
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone_number}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center">
                    <a href="/register" className="text-blue-600 hover:underline">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
