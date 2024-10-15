import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate(); // Initialize the navigation
    const [activeSection, setActiveSection] = useState('user-management'); // Default section

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="fixed z-10 inset-y-0 left-0 w-64 bg-gray-800 text-white">
                <div className="px-4 py-8">
                    <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>
                    <ul>
                        <li className="mb-4">
                            <button
                                onClick={() => setActiveSection('user-management')}
                                className="block py-2 px-4 rounded-md hover:bg-gray-600 w-full text-left"
                            >
                                User Management
                            </button>
                        </li>
                        <li className="mb-4">
                            <button
                                onClick={() => setActiveSection('system-configuration')}
                                className="block py-2 px-4 rounded-md hover:bg-gray-600 w-full text-left"
                            >
                                System Configuration
                            </button>
                        </li>
                        <li className="mb-4">
                            <button
                                onClick={() => setActiveSection('navigation')}
                                className="block py-2 px-4 rounded-md hover:bg-gray-600 w-full text-left"
                            >
                                Navigation
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-64 p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white flex-1">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                {/* User Management Section */}
                {activeSection === 'user-management' && (
                    <div id="user-management" className="mb-8">
                        <h2 className="text-2xl mb-4">User Management</h2>
                        <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-lg">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Username</th>
                                    <th className="px-4 py-2">Role</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">john_doe</td>
                                    <td className="border px-4 py-2">Admin</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Edit</button>
                                        <button className="bg-red-600 text-white px-4 py-2 ml-2 rounded-md">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* System Configuration Section */}
                {activeSection === 'system-configuration' && (
                    <div id="system-configuration" className="mb-8">
                        <h2 className="text-2xl mb-4">System Configuration</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button
                                onClick={() => navigate('/manage-food-categories')}
                                className="bg-white text-gray-800 py-4 rounded-lg shadow-lg hover:bg-gray-200"
                            >
                                Manage Food Categories
                            </button>
                            <button
                                onClick={() => navigate('/update-system-settings')}
                                className="bg-white text-gray-800 py-4 rounded-lg shadow-lg hover:bg-gray-200"
                            >
                                Update System Settings
                            </button>
                        </div>
                    </div>
                )}

                {/* Navigation Section */}
                {activeSection === 'navigation' && (
                    <div id="navigation">
                        <h2 className="text-2xl mb-4">Navigation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button
                                onClick={() => navigate('/orders')}
                                className="bg-white text-gray-800 py-4 rounded-lg shadow-lg hover:bg-gray-200"
                            >
                                Orders
                            </button>
                            <button
                                onClick={() => navigate('/payments')}
                                className="bg-white text-gray-800 py-4 rounded-lg shadow-lg hover:bg-gray-200"
                            >
                                Payments
                            </button>
                            <button
                                onClick={() => navigate('/menu-planning')}
                                className="bg-white text-gray-800 py-4 rounded-lg shadow-lg hover:bg-gray-200"
                            >
                                Menu Planning
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPage;
