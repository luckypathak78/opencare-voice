import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import IssueCard from "../components/IssueCard";
import axios from "axios";

function Dashboard() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/issues");
      setIssues(res.data);
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">
          All Reported Issues
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {issues.map((issue) => (
              <IssueCard
                key={issue.id}
                hospital={issue.hospitalName}
                description={issue.description}
                status={issue.status || "Open"}
                votes={issue.votes || 0}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;