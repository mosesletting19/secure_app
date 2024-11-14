import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const FarmerPage = () => {
    const [activeSection, setActiveSection] = useState('order-management');
    const [isBidPopupOpen, setIsBidPopupOpen] = useState(false);
    const [bidPrice, setBidPrice] = useState('');
    const [biddedOrder, setBiddedOrder] = useState(null);
    const [isPerishable, setIsPerishable] = useState(false);

    // Open the bid popup
    const openBidPopup = (orderId) => {
        setBiddedOrder(orderId);
        setIsBidPopupOpen(true);
    };

    // Close the bid popup
    const closeBidPopup = () => {
        setIsBidPopupOpen(false);
        setBidPrice('');
        setBiddedOrder(null);
    };

    // Submit the bid
    const submitBid = () => {
        console.log(`Bid placed for order ${biddedOrder} with price: ${bidPrice}`);
        closeBidPopup();
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="fixed z-10 inset-y-0 left-0 w-64 bg-gray-800 text-white">
                <div className="px-4 py-8">
                    <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
                    <ul>
                        <li className="mb-4">
                            <button
                                onClick={() => setActiveSection('order-management')}
                                className="block py-2 px-4 rounded-md hover:bg-gray-600 w-full text-left"
                            >
                                Order Management
                            </button>
                        </li>
                        <li className="mb-4">
                            <button
                                onClick={() => setActiveSection('supply-management')}
                                className="block py-2 px-4 rounded-md hover:bg-gray-600 w-full text-left"
                            >
                                Supply Management
                            </button>
                        </li>
                        <li className="mb-4">
                            <button
                                onClick={() => setActiveSection('payment-management')}
                                className="block py-2 px-4 rounded-md hover:bg-gray-600 w-full text-left"
                            >
                                Payment Management
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-64 p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white flex-1">
                <h1 className="text-3xl font-bold mb-8">Farmer/Supplier Dashboard</h1>

                {/* Order Management Section */}
                {activeSection === 'order-management' && (
                    <div id="order-management" className="mb-8">
                        <h2 className="text-2xl mb-4">Available Tenders</h2>

                        {/* Available Tenders Table */}
                        <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-lg mb-4">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Food Type</th>
                                    <th className="px-4 py-2">Quantity</th>
                                    <th className="px-4 py-2">Deadline</th>
                                    <th className="px-4 py-2">Bid</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">ORD123</td>
                                    <td className="border px-4 py-2">Tomatoes</td>
                                    <td className="border px-4 py-2">100 kg</td>
                                    <td className="border px-4 py-2">2024-09-10</td>
                                    <td className="border px-4 py-2">
                                        <button
                                            onClick={() => openBidPopup('ORD123')}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md"
                                        >
                                            Bid
                                        </button>
                                    </td>
                                    <td className="border px-4 py-2">
                                        {biddedOrder === 'ORD123' ? 'Bidded' : 'Pending'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Bid Popup */}
                {isBidPopupOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-96 relative">
                            <button
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                                onClick={closeBidPopup}
                            >
                                <FaTimes size={20} />
                            </button>

                            <h2 className="text-2xl font-bold mb-4">Place a Bid for {biddedOrder}</h2>
                            <label className="block mb-2 text-gray-700">Enter Your Price</label>
                            <input
                                type="number"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
                                value={bidPrice}
                                onChange={(e) => setBidPrice(e.target.value)}
                            />
                            <button
                                onClick={submitBid}
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                            >
                                Submit Bid
                            </button>
                        </div>
                    </div>
                )}

                {/* Supply Management Section */}
                {activeSection === 'supply-management' && (
                    <div id="supply-management" className="mb-8">
                        <h2 className="text-2xl mb-4">Supply Management</h2>

                        {/* Supply Recording Form */}
                        <form className="bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                            <h3 className="text-xl mb-4">Record New Supply</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">Produce</label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Quantity</label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Delivery Date</label>
                                <input type="date" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Perishable</label>
                                <select
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    value={isPerishable ? 'Yes' : 'No'}
                                    onChange={(e) => setIsPerishable(e.target.value === 'Yes')}
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                                Submit Supply Record
                            </button>
                        </form>
                    </div>
                )}

                {/* Payment Management Section */}
                {activeSection === 'payment-management' && (
                    <div id="payment-management">
                        <h2 className="text-2xl mb-4">Payment Management</h2>

                        {/* Payment Tracking Table */}
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
                                        <button className="bg-green-600 text-white px-4 py-2 rounded-md">Confirm Payment Received</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FarmerPage;
