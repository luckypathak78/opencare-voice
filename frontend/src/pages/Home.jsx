const Home = ({ issues }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        All Reported Issues
      </h1>

      {issues.length === 0 ? (
        <div className="bg-white shadow-md rounded-xl p-6">
          <p className="text-gray-600">No issues reported yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {issues.map((issue, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-xl font-semibold">{issue.hospital}</h2>
              <p className="text-sm text-gray-500">{issue.type}</p>
              <p className="mt-2">{issue.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
