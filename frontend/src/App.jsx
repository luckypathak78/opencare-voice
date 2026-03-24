import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ReportIssue from "./pages/ReportIssue";
import Login from "./pages/Login";
import Signup from "./pages/signup";

// Reusable wrapper for page content
const PageWrapper = ({ children, title }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-3xl font-bold text-blue-400 mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {children}
    </div>
  </div>
);
function App() {
  return (
    <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">


        {/* Navbar */}
        <nav className="bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">
            OpenCare Voice
          </h1>

           <div className="flex gap-6 text-lg font-semibold">
            <Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link>
            <Link to="/reportissue" className="hover:text-blue-300 transition duration-300">Report Issue</Link>
            <Link to="/dashboard" className="hover:text-blue-300 transition duration-300">Dashboard</Link>
            <Link to="/login" className="hover:text-green-400 transition duration-300">Login</Link>
            <Link to="/signup" className="hover:text-pink-400 transition duration-300">Signup</Link>
          </div>
        </nav>


       {/* Main Content */}
        <div className="flex-grow p-8">
          <Routes>
            <Route path="/" element={
              <PageWrapper title="Welcome to OpenCare Voice">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <h3 className="text-xl font-bold mb-2">Quick Report</h3>
                  <p className="text-gray-300">Easily report an issue with a few clicks.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <h3 className="text-xl font-bold mb-2">Dashboard Overview</h3>
                  <p className="text-gray-300">Track all reported issues in real-time.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <h3 className="text-xl font-bold mb-2">Community Help</h3>
                  <p className="text-gray-300">Collaborate with volunteers to resolve problems.</p>
                </div>
              </PageWrapper>
            }/>
            <Route path="/reportissue" element={<ReportIssue />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-6 mt-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <p className="text-sm">&copy; {new Date().getFullYear()} OpenCare Voice. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <Link to="/reportissue" className="hover:text-white transition">Report Issue</Link>
              <Link to="/dashboard" className="hover:text-white transition">Dashboard</Link>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
            </div>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;