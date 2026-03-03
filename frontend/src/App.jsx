import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";

function App() {
  const [issues, setIssues] = useState([]);

  const addIssue = (newIssue) => {
    setIssues([...issues, newIssue]);
  };

  return (
    <Router>
      <div>
        <div className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="font-semibold text-lg">OpenCare Voice</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/report" className="hover:underline">Report Issue</Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home issues={issues} />} />
          <Route path="/report" element={<ReportIssue addIssue={addIssue} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
