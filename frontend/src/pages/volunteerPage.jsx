
import { useEffect, useState } from "react";
import axios from "axios";

const VolunteerPage = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    const res = await axios.get("http://localhost:5000/api/issues");
    setIssues(res.data);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Volunteer Dashboard
      </h1>

      <p className="mb-6 text-gray-600">
        Review, validate, and help resolve issues reported in government hospitals.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-black">
        {issues.length === 0 ? (
          <p>No issues reported yet.</p>
        ) : (
          issues.map((issue) => (
            <div key={issue.id} className="bg-white p-4 rounded shadow">
              <h3>{issue.hospital}</h3>
              <p>{issue.description}</p>

              <a href={`/issue/${issue.id}`}>
                <button>Give Solution</button>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VolunteerPage;