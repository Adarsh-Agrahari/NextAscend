// src/pages/Auth/SignIn.js

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async (response) => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="flex items-center justify-center min-h-80 bg-white">
      <div className="w-full max-w-sm p-8 bg-blue-50 shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <div className="flex flex-col items-center">
          {/* <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            logo="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png" // Optional
            buttonText="Sign in with Google"
            className="w-full"
          /> */}
          <button
          onClick={handleGoogleLogin}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Sign in with Google
        </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
