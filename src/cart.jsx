import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import ill0 from './images/illustrations/ill0.webp';
import ill01 from './images/illustrations/ill01.webp';

const Cart = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    bkashNumber: "",
    bkashPin: "",
  });

  const cartItems = [
    {
      id: 1,
      title: "ILLUSTRATION PRINT",
      image: ill01,
      price: 75,
      quantity: 1,
    },
    {
      id: 2,
      title: "ILLUSTRATION PRINT",
      image: ill0,
      price: 120,
      quantity: 2,
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCheckout(false);
    setShowConfirmation(true);
  };

  const orderId = Math.floor(Math.random() * 900000 + 100000); // 6-digit ID

  return (
    <div className="min-h-screen md:ml-[20rem] flex items-center justify-center bg-yellow-200 p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-lato font-bold mb-6 text-center">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-100 rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrashAlt />
                </button>
              </div>
            ))}

            <div className="text-right mt-6">
              <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
              <button
                onClick={() => setShowCheckout(true)}
                className="mt-3 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Popup */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowCheckout(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />

              <div className="space-y-2">
                <p className="font-semibold">Payment Method</p>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  Cash on Delivery
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="bkash"
                    checked={paymentMethod === "bkash"}
                    onChange={() => setPaymentMethod("bkash")}
                  />
                  Pay on Bkash
                </label>
              </div>

              {paymentMethod === "bkash" && (
                <div className="space-y-2">
                  <input
                    type="text"
                    name="bkashNumber"
                    placeholder="Bkash Number"
                    value={formData.bkashNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="password"
                    name="bkashPin"
                    placeholder="Bkash PIN"
                    value={formData.bkashPin}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Order Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
            <p className="mb-2">Your order has been placed successfully.</p>
            <p className="text-lg font-semibold mb-4">Order ID: #{orderId}</p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="mt-2 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
