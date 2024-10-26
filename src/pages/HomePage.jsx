// src/pages/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-zinc-800 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Employment Management System</h1>
          <button onClick={()=>{
            navigate("/login")
          }} className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==')` }}
      >
        <div className="bg-opacity-60 bg-black h-full w-full flex items-center justify-center text-center text-white py-20 px-4">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Your Partner in Workforce Management
            </h2>
            <p className="text-lg mb-8">
              Simplify recruitment, streamline processes, and empower employees.
            </p>
            <button onClick={()=>{
            navigate("/login")
          }} className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition">
              Employee Login
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100  py-16">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold mb-12">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded shadow-lg">
              <h4 className="font-bold text-xl mb-2">Employee Management</h4>
              <p>Organize employee data effortlessly and efficiently.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h4 className="font-bold text-xl mb-2">Recruitment Process</h4>
              <p>Simplify hiring with end-to-end recruitment management.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h4 className="font-bold text-xl mb-2">Payroll & Compensation</h4>
              <p>Accurate and timely payroll processing.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
              <h4 className="font-bold text-xl mb-2">
                Attendance & Leave Tracking
              </h4>
              <p>Easily track attendance and manage leave requests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded shadow-lg border">
              <p>
                "EMS has transformed our hiring process and streamlined our
                operations."
              </p>
              <h4 className="font-bold mt-4">- John Doe, HR Manager</h4>
            </div>
            <div className="p-6 rounded shadow-lg border">
              <p>
                "Efficient payroll and easy employee management. Highly
                recommended!"
              </p>
              <h4 className="font-bold mt-4">- Sarah Lee, Operations Head</h4>
            </div>
            <div className="p-6 rounded shadow-lg border">
              <p>
                "The leave tracking feature makes managing time-off requests a
                breeze!"
              </p>
              <h4 className="font-bold mt-4">- Emily Green, Team Leader</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center px-6">
          <p>
            &copy; {new Date().getFullYear()} Employment Management System. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
