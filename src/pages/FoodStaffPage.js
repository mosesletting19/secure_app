import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Sidebar component
const Sidebar = ({ selectedSection, setSelectedSection }) => {
    return (
        <div className="bg-blue-800 text-white w-64 min-h-screen p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <ul>
                <li
                    onClick={() => setSelectedSection('menu')}
                    className={`mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded ${selectedSection === 'menu' ? 'bg-blue-600' : ''}`}
                >
                    Menu Planning
                </li>
                <li
                    onClick={() => setSelectedSection('orders')}
                    className={`mb-4 cursor-pointer hover:bg-blue-600 p-2 rounded ${selectedSection === 'orders' ? 'bg-blue-600' : ''}`}
                >
                    Order Management
                </li>
                <li
                    onClick={() => setSelectedSection('payments')}
                    className={`cursor-pointer hover:bg-blue-600 p-2 rounded ${selectedSection === 'payments' ? 'bg-blue-600' : ''}`}
                >
                    Payments
                </li>
            </ul>
        </div>
    );
};

// Main Dashboard component
const FoodStaffPage = () => {
    const [selectedSection, setSelectedSection] = useState('menu'); // Track the selected section
    const [isSidebarOpen, setSidebarOpen] = useState(true); // Control the sidebar visibility
    const navigate = useNavigate();

    const renderContent = () => {
        switch (selectedSection) {
            case 'menu':
                return (
                    <div>
                        <h2 className="text-2xl mb-4">Menu Planning</h2>
                        <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-lg mb-4">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Menu Item</th>
                                    <th className="px-4 py-2">Nutritional Info</th>
                                    <th className="px-4 py-2">Schedule</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Spaghetti</td>
                                    <td className="border px-4 py-2">Calories: 200</td>
                                    <td className="border px-4 py-2">Monday</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Edit</button>
                                        <button className="bg-red-600 text-white px-4 py-2 ml-2 rounded-md">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <form className="bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                            <h3 className="text-xl mb-4">Add/Edit Menu</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">Menu Item:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Menu Item"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nutritional Info:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Nutritional Info"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Schedule:</label>
                                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                                Save/Submit Menu
                            </button>
                        </form>
                    </div>
                );
            case 'orders':
                return (
                    <div>
                        <h2 className="text-2xl mb-4">Order Management</h2>
                        <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-lg mb-4">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">ORD123</td>
                                    <td className="border px-4 py-2">Pending</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Confirm Order</button>
                                        <button className="bg-green-600 text-white px-4 py-2 ml-2 rounded-md">Mark as Received</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                                <h3 className="text-xl mb-2">Recent Orders</h3>
                                <ul>
                                    <li>Order #ORD124 - Pending</li>
                                    <li>Order #ORD125 - Confirmed</li>
                                </ul>
                            </div>
                            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                                <h3 className="text-xl mb-2">Quick Actions</h3>
                                <button
                                    onClick={() => navigate('/confirm-deliveries')}
                                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mb-2"
                                >
                                    Confirm Deliveries
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'payments':
                return (
                    <div>
                        <h2 className="text-2xl mb-4">Payments</h2>
                        <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-lg">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Payment ID</th>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">PAY123</td>
                                    <td className="border px-4 py-2">ORD123</td>
                                    <td className="border px-4 py-2">Pending</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-green-600 text-white px-4 py-2 rounded-md">Mark as Paid</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            {isSidebarOpen && (
                <Sidebar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            )}

            {/* Main Content */}
            <div className="flex-grow p-8 bg-gray-100 min-h-screen">
                <button
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 flex items-center"
                >
                    <FaBars className="mr-2" /> {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                </button>

                {/* Render the content based on the selected section */}
                {renderContent()}
            </div>
        </div>
    );
};

export default FoodStaffPage;
