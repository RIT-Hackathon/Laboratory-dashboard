import React from "react";
import { FcGoogle } from "react-icons/fc";

const AuthButtons = ({ isSignUp, handleLogin, handleSignup, setIsSignUp }) => {
  return (
    <div className="space-y-4 mt-4">
      {isSignUp ? (
        <button
          onClick={handleSignup}
          className="w-full bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition-all"
        >
          Sign Up
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition-all"
        >
          Login
        </button>
      )}

      {!isSignUp ? (
        <button
          onClick={() => setIsSignUp(true)}
          className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-800 transition-all"
        >
          Create an Account
        </button>
      ) : (
        <button
          onClick={() => setIsSignUp(false)}
          className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-600 transition-all"
        >
          Already have an account? Login
        </button>
      )}

      <button className="w-full flex items-center justify-center border border-gray-300 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100 transition-all">
        <FcGoogle className="mr-2 text-2xl" /> Sign In with Google
      </button>
    </div>
  );
};

export default AuthButtons;
