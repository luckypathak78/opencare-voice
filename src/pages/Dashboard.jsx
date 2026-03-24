import React from "react";
import Navbar from "../components/Navbar";
import IssueCard from "../components/IssueCard";

function Dashboard() {

  const issues = [
    {
      hospital: "District Hospital",
      description: "Sanitation problem in ward 3",
      status: "Open",
      votes: 12
    },
    {
      hospital: "City Hospital",
      description: "Medicine shortage in emergency ward",
      status: "In Progress",
      votes: 8
    }
  ];

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-50 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          All Reported Issues
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {issues.map((issue, index) => (
            <IssueCard
              key={index}
              hospital={issue.hospital}
              description={issue.description}
              status={issue.status}
              votes={issue.votes}
            />
          ))}

        </div>

      </div>
    </>
  );
}

export default Dashboard;
