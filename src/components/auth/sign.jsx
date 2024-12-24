import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Utils/AuthContext";
import "../../index.css";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96">
        <h1 className="mb-4 text-xl font-bold text-center text-gray-800">
          BERHASIL!
        </h1>
        <p className="mb-6 text-center text-gray-700">Akun berhasil dibuat!</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 font-semibold text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

const SignUp = () => {
  const [userInformation, setInformation] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register(userInformation);
      if (response.success) {
        setIsModalOpen(true);
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInformation({ ...userInformation, [name]: value });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center bg-gray">
      <div className="flex items-center justify-center w-full h-full mt-24 mb-24 bg-black">
        <div className="p-8 rounded-lg shadow-md bg-gradient-to-r from-141414 to-202020 bg-opacity-900 w-96">
          <h2 className="mb-6 text-2xl font-bold text-center text-white">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-white"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={userInformation.name}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-white-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={userInformation.email}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-white-700"
                htmlFor="email"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                value={userInformation.password}
                onChange={onChange}
                required
              />
            </div>

            {error && <p className="error">{error}</p>}
            <br />
            <div className="mb-4">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
              <br />
              <Link to="/login">
                <h6 className="mt-10 text-left">Have an account? Login</h6>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default SignUp;
