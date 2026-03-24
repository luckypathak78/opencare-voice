import React from "react";

function IssueCard({ hospital, description, status, votes }) {
  return (
    <div className="bg-white shadow p-5 rounded-lg border">

      <h3 className="text-xl font-semibold mb-2">
        {hospital}
      </h3>

      <p className="text-gray-600 mb-3">
        {description}
      </p>

      <div className="flex justify-between items-center">

        <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded">
          {status}
        </span>

        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          {votes}
        </button>

      </div>

    </div>
  );
}

export default IssueCard;