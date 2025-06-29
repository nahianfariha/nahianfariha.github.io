import React, { useState } from "react";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="md:ml-[20rem] min-h-screen flex items-center justify-center bg-yellow-200 px-4">
      {/* Login Form */}
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-700 hover:text-white"
          >
            Login
          </button>
        </form>

        <div className="mt-4 flex justify-between text-sm text-yellow-700">
          <button className="hover:underline">Forgot your password?</button>
          <button
            onClick={() => setShowRegister(true)}
            className="hover:underline"
          >
            Create account
          </button>
        </div>
      </div>

      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
          <div className="relative bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <button
              onClick={() => setShowRegister(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                placeholder="Mobile No"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-700"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
