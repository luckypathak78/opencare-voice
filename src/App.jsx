import { Mic, BarChart3, Users } from "lucide-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ReportIssue from "./pages/ReportIssue";
import Login from "./pages/Login";
import Signup from "./pages/signup";

// Reusable wrapper for page content
const PageWrapper = ({ children, title }) => (
  <div className="flex flex-col items-center">
     <h2 className="text-4xl font-bold text-white mb-3">{title}</h2>
    <p className="text-gray-300 mb-6 max-w-xl">
      A community-driven platform to report and resolve issues in government hospitals.
    </p>

    {/* Badge */}
    <div className="mb-8 bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm">
      ✅ 100% Free • Open Source • Community Driven
    </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      {children}
    </div>
  </div>
);
function App() {
  return (
    <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 text-white">


        {/* Navbar */}
        <nav className="bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center border-b border-gray-700">
          <h1 className="text-2xl font-bold text-blue-400">
          🎤 OpenCare Voice
          </h1>

           <div className="flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link>
            <Link to="/reportissue" className="hover:text-blue-300 transition duration-300">Report Issue</Link>
            <Link to="/dashboard" className="hover:text-blue-300  duration-300">Dashboard</Link>
            <Link to="/login"> <button className="border px-3 py-1 rounded-lg hover:bg-gray-700">Login
              </button>
            </Link>
            <Link to="/signup">
            <button className="bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600">
            Signup
              </button></Link>
          </div>
        </nav>


       {/* Main Content */}
        <div className="flex-grow p-8">
          <Routes>
            <Route path="/" element={
              <PageWrapper title="Welcome to OpenCare Voice">
                  {/* CARD 1 */}
                  <Card
                    icon={<Mic />}
                    title="Quick Report"
                    desc="Report hospital issues using voice, text, or photos"
                    btn="Report Issue"
                  />

                  {/* CARD 2 */}
                  <Card
                    icon={<BarChart3 />}
                    title="Dashboard Overview"
                    desc="Track all reported issues in real-time"
                    btn="View Dashboard"
                  />

                  {/* CARD 3 */}
                  <Card
                    icon={<Users />}
                    title="Community Help"
                    desc="Collaborate with volunteers to solve problems"
                    btn="Join Community"
                  />

                </PageWrapper>
              }
            />
               
            <Route path="/reportissue" element={<ReportIssue />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        {/* Footer */}
         <footer className="text-center py-6 text-gray-400 border-t border-gray-700 text-sm">
          <p>© 2024 OpenCare Voice. All rights reserved.</p>
          <p className="mt-2">Community-driven initiative for transparent healthcare</p>

          <div className="flex justify-center gap-6 mt-3 text-xs">
            <span>🔐 Secure</span>
            <span>💻 Open Source</span>
            <span>❤️ Volunteers</span>
            <span>🌍 Multi-language</span>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}
/* 🔥 Improved Card Component */
function Card({ icon, title, desc, btn }) {
  return (
    <div className="bg-white/10 backdrop-blur p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">

      <div className="text-blue-300 mb-3">{icon}</div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-300 mt-2">{desc}</p>

      <button className="mt-4 w-full bg-white text-blue-900 py-2 rounded-lg font-medium hover:bg-gray-200">
        {btn}
      </button>
    </div>
  );
}
     


export default App;