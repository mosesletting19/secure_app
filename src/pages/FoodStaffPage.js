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
                            {/* <div className="mb-4">
                                <label className="block text-gray-700">Nutritional Info:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Nutritional Info"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div> */}
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

                        {/* Tender Inventory Form */}
                        <form className="bg-white text-gray-800 p-4 rounded-lg shadow-lg mb-4">
                            <h3 className="text-xl mb-4">Tender Inventory Form</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">Food Type:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Food Type"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Quantity:</label>
                                <input
                                    type="number"
                                    placeholder="Enter Quantity"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Measurement:</label>
                                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                                    <option value="lbs">lbs</option>
                                    <option value="kgs">kgs</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Delivery Deadline:</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                                Submit Tender Inventory
                            </button>
                        </form>

                        {/* Bided Orders Table */}
                        <h3 className="text-xl mb-4">Bided Orders List</h3>
                        <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-lg mb-4">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Phone Number</th>
                                    <th className="px-4 py-2">Food Type</th>
                                    <th className="px-4 py-2">Deadline</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">ORD123</td>
                                    <td className="border px-4 py-2">John Doe</td>
                                    <td className="border px-4 py-2">0712345678</td>
                                    <td className="border px-4 py-2">Rice</td>
                                    <td className="border px-4 py-2">2024-10-25</td>
                                    <td className="border px-4 py-2">$100</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-green-600 text-white px-4 py-2 rounded-md">Confirm</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Supply Order List */}
                        <h3 className="text-xl mb-4">Supply Order List</h3>
                        <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-lg mb-4">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Produce</th>
                                    <th className="px-4 py-2">Quantity</th>
                                    <th className="px-4 py-2">Perishable</th>
                                    <th className="px-4 py-2">Delivery Date</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">ORD124</td>
                                    <td className="border px-4 py-2">Tomatoes</td>
                                    <td className="border px-4 py-2">50 lbs</td>
                                    <td className="border px-4 py-2">Yes</td> {/* New Perishable column data */}
                                    <td className="border px-4 py-2">2024-10-30</td>
                                    <td className="border px-4 py-2">Pending</td>
                                </tr>
                                {/* Additional rows can be added here */}
                            </tbody>
                        </table>
                    </div>
                );
            case 'payments':
                return (
                    <div>
                        <h2 className="text-2xl mb-4">Payments</h2>
                        <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-lg mb-4">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Payment ID</th>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Amount</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">PAY123</td>
                                    <td className="border px-4 py-2">ORD123</td>
                                    <td className="border px-4 py-2">$100</td>
                                    <td className="border px-4 py-2">Completed</td>
                                    <td className="border px-4 py-2">2024-10-20</td>
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
            <Sidebar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            <div className="flex-1 p-6 bg-gray-100">
                <FaBars className="text-2xl cursor-pointer" onClick={() => setSidebarOpen(!isSidebarOpen)} />
                {renderContent()}
            </div>
        </div>
    );
};

export default FoodStaffPage;
