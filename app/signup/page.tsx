'use client';
import React from 'react';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Sign Up</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md focus:ring-indigo-500" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md focus:ring-indigo-500" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-md focus:ring-indigo-500" />
          <button className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">Create Account</button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account? <a href="/login" className="text-indigo-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
