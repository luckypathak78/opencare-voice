import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportIssue = ({ addIssue }) => {
  const [hospital, setHospital] = useState("");
  const [type, setType] = useState("Sanitation");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    addIssue({ hospital, type, description });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Report an Issue
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Hospital Name"
            className="w-full border rounded-lg px-3 py-2"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            required
          />

          <select
            className="w-full border rounded-lg px-3 py-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Sanitation</option>
            <option>Medication</option>
            <option>Staff Behavior</option>
            <option>Infrastructure</option>
          </select>

          <textarea
            rows="4"
            placeholder="Describe the issue..."
            className="w-full border rounded-lg px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
