'use client';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-500">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md focus:ring-purple-500" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-md focus:ring-purple-500" />
          <button className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">Log In</button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account? <a href="/signup" className="text-purple-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
