import { useLocation } from "react-router-dom";

function DetailsPage() {
  const { state } = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-2">User Details</h2>
        <p><strong>Username:</strong> {state?.username}</p>
        <p><strong>Password:</strong> {state?.password}</p>
      </div>
    </div>
  );
}

export default DetailsPage;
