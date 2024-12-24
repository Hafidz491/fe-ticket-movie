import React from "react";
import { useAuth } from "../../Utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="p-8 text-white bg-gray-800 rounded-lg shadow-lg w-96">
        <h2 className="mb-4 text-2xl font-bold">Profile</h2>
        {currentUser ? (
          <div>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <p>
              <strong>Name:</strong> {currentUser.name}
            </p>
            <button
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Anda belum login.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
