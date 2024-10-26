import React from 'react';
import { useAuth } from './authContext'; // Pastikan path ini sesuai
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, logout, isAuthenticated } = useAuth(); // Ambil isAuthenticated dan user
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="bg-black flex items-center justify-center h-screen">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white w-96">
                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                {isAuthenticated ? ( // Periksa apakah pengguna sudah terautentikasi
                    <div>
                        <p><strong>Email:</strong> {user.email}</p>
                        <button 
                            className="bg-red-500 text-white py-2 px-4 rounded mt-4"
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
