import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaUserCircle, FaLock } from "react-icons/fa";

const Login = ({ handleLogin }) => {
  const [check, setcheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  const onSumbitHandler = (e) => {
    e.preventDefault();
    const target = e.target;
    if (
      target.email.value.split("").length > 3 &&
      target.password.value.split("").length > 10
    ) {
      setemail((prev) => {
        return target.email.value;
      });
      setpassword((prev) => {
        return target.password.value;
      });
    }

    handleLogin(email, password);
    setemail("");
    setpassword("");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-30 mb-4">
              <FaUserCircle className="text-white text-3xl" />
            </div>
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-blue-100 mt-2">Sign in to access your account</p>
          </div>
          
          {/* Form */}
          <div className="p-8">
            <form onSubmit={onSumbitHandler} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUserCircle className="text-gray-400" />
                </div>
                <input
                  name="email"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
              </div>
              
              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  minLength={10}
                  name="password"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    onClick={() => setcheck((prev) => !prev)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    type="checkbox"
                  />
                  <label
                    className={`ml-2 block text-sm font-medium ${
                      check ? "text-blue-600" : "text-gray-700"
                    }`}
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition transform hover:-translate-y-0.5"
                >
                  Sign In
                </button>
              </div>
            </form>
            
            {/* Optional: Create Account Link */}
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <a className="font-medium text-blue-600 hover:text-blue-500" href="#">
                Create account
              </a>
            </div>
          </div>
        </div>
        
        {/* Company Info */}
        <div className="text-center mt-6 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} EMS. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;
