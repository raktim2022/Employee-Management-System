// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Assuming you'll install these icons
import { 
  FaUserTie, 
  FaUsers, 
  FaMoneyBillWave, 
  FaCalendarCheck,
  FaLinkedin,
  FaTwitter,
  FaFacebookSquare,
  FaStar,
  FaBars,
  FaTimes
} from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 flex flex-col">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? "text-blue-600" : "text-white"}`}>
              EMS<span className="text-blue-500">.</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-blue-500 transition`}>Features</a>
            <a href="#testimonials" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-blue-500 transition`}>Testimonials</a>
            <a href="#about" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-blue-500 transition`}>About Us</a>
            <a href="#contact" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-blue-500 transition`}>Contact</a>
            <button 
              onClick={() => navigate("/login")} 
              className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
            >
              Login
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? "text-blue-600" : "text-white"} text-2xl focus:outline-none`}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="flex flex-col py-4">
              <a href="#features" className="px-6 py-3 text-gray-700 hover:bg-gray-100">Features</a>
              <a href="#testimonials" className="px-6 py-3 text-gray-700 hover:bg-gray-100">Testimonials</a>
              <a href="#about" className="px-6 py-3 text-gray-700 hover:bg-gray-100">About Us</a>
              <a href="#contact" className="px-6 py-3 text-gray-700 hover:bg-gray-100">Contact</a>
              <div className="px-6 py-3">
                <button 
                  onClick={() => navigate("/login")} 
                  className="w-full bg-blue-600 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-700 transition"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Modern Workforce <br />
                <span className="text-blue-300">Management Solution</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-lg">
                Streamline your HR operations, boost productivity and empower your team with our comprehensive employment management system.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <button 
                  onClick={() => navigate("/login")} 
                  className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition shadow-lg transform hover:scale-105"
                >
                  Employee Login
                </button>
                <button 
                  onClick={() => navigate("/demo")} 
                  className="bg-transparent text-white border-2 border-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-700 transition transform hover:scale-105"
                >
                  Request Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                {/* <div className="bg-blue-400 bg-opacity-20 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
                  <img 
                    src="https://placehold.co/600x400/e4e9f2/2563eb?text=Dashboard+Preview" 
                    alt="EMS Dashboard Preview" 
                    className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
                  />
                </div> */}
                <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-yellow-400 rounded-full opacity-50 blur-lg"></div>
                <div className="absolute -top-6 -left-6 h-16 w-16 bg-blue-300 rounded-full opacity-50 blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 bg-white rounded-t-[50%] md:rounded-t-[70%] -mb-1"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto text-center px-6">
          <div className="mb-16">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">Core Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3">Powerful Features for Modern HR</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover how our comprehensive toolkit can transform your HR operations and employee management experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 text-2xl mx-auto mb-5">
                <FaUserTie />
              </div>
              <h3 className="font-bold text-xl mb-3">Employee Management</h3>
              <p className="text-gray-600">Centralize and organize employee data with powerful search and filtering capabilities.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-green-600 text-2xl mx-auto mb-5">
                <FaUsers />
              </div>
              <h3 className="font-bold text-xl mb-3">Smart Recruitment</h3>
              <p className="text-gray-600">Streamline hiring with AI-powered candidate tracking and automated workflows.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center text-purple-600 text-2xl mx-auto mb-5">
                <FaMoneyBillWave />
              </div>
              <h3 className="font-bold text-xl mb-3">Payroll & Benefits</h3>
              <p className="text-gray-600">Process accurate payroll and manage employee benefits with ease and precision.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center text-amber-600 text-2xl mx-auto mb-5">
                <FaCalendarCheck />
              </div>
              <h3 className="font-bold text-xl mb-3">Time & Attendance</h3>
              <p className="text-gray-600">Track work hours and manage leave requests with our intuitive interface.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <button 
              onClick={() => navigate("/features")} 
              className="bg-gray-100 text-gray-800 font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition"
            >
              Explore All Features
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">2500+</h3>
              <p className="text-gray-600">Companies</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">94%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">30%</h3>
              <p className="text-gray-600">Time Saved</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">99.9%</h3>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">About Our Company</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3">Who We Are</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're passionate about simplifying workforce management to help businesses focus on what they do best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="bg-blue-400 bg-opacity-20 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
                  <img 
                    src="https://placehold.co/600x400/e4e9f2/2563eb?text=Our+Team" 
                    alt="EMS Team" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-yellow-400 rounded-full opacity-50 blur-lg"></div>
                <div className="absolute -top-6 -left-6 h-16 w-16 bg-blue-300 rounded-full opacity-50 blur-lg"></div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At EMS, we're dedicated to transforming how businesses manage their workforce. Our mission is to create intuitive tools that streamline HR operations, enhance productivity, and foster better work environments.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Journey</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2018, our team of HR experts and software engineers came together with a shared vision: to solve the challenges businesses face with employee management. What started as a simple leave tracking tool has evolved into a comprehensive suite of HR management solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="text-blue-600 font-bold text-4xl mb-2">45+</h4>
                  <p className="text-gray-500 text-center">Talented Team Members</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                  <h4 className="text-blue-600 font-bold text-4xl mb-2">12</h4>
                  <p className="text-gray-500 text-center">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 text-xl mb-4">1</div>
                <h4 className="text-xl font-bold mb-2">Innovation</h4>
                <p className="text-gray-600">We constantly push boundaries to create solutions that address evolving workplace needs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-600 text-xl mb-4">2</div>
                <h4 className="text-xl font-bold mb-2">Integrity</h4>
                <p className="text-gray-600">We believe in honest, transparent relationships with our clients and within our team.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center text-purple-600 text-xl mb-4">3</div>
                <h4 className="text-xl font-bold mb-2">Excellence</h4>
                <p className="text-gray-600">We're committed to delivering high-quality solutions that exceed expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1 rounded-full">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3">Trusted by HR Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See what our clients have to say about how our platform has transformed their HR operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "EMS has transformed our hiring process and streamlined our operations. The dashboard is intuitive and the support team is exceptionally responsive."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://placehold.co/60x60/4f46e5/ffffff?text=JD" 
                  alt="John Doe" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">John Doe</h4>
                  <p className="text-gray-600 text-sm">HR Director, TechCorp Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Implementing this system reduced our payroll processing time by 70%. The analytics dashboard gives us insights we never had before. Excellent ROI!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://placehold.co/60x60/4f46e5/ffffff?text=SL" 
                  alt="Sarah Lee" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Lee</h4>
                  <p className="text-gray-600 text-sm">Operations Head, Global Ventures</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The leave tracking feature makes managing time-off requests a breeze! Our team loves the mobile app, and I appreciate the comprehensive reporting."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://placehold.co/60x60/4f46e5/ffffff?text=EG" 
                  alt="Emily Green" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Emily Green</h4>
                  <p className="text-gray-600 text-sm">Team Leader, Innovate Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your HR operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using our platform to streamline their workforce management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => navigate("/demo")} 
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition shadow-lg"
            >
              Schedule a Demo
            </button>
            <button 
              onClick={() => navigate("/contact")} 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">EMS<span className="text-blue-500">.</span></h3>
              <p className="mb-4">Modern solutions for workforce management and HR operations.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaFacebookSquare className="text-xl" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">API Status</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Employment Management System. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
