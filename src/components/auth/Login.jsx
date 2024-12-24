import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Utils/AuthContext";
import api from "../../Utils/ApiEndpoint";

const Login = () => {
  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInformation({ ...userInformation, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("User/auth/login", userInformation);
      console.log("Login Response:", response.data);

      // Validasi apakah respons memiliki data yang dibutuhkan
      if (response.data?.token && response.data?.user?.id) {
        login(response.data.token, response.data.user);
        navigate("/");
      } else {
        throw new Error("Invalid response format from server");
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-black">
      <div className="flex items-center justify-center w-full h-full mt-24 mb-24 bg-black bg-light">
        <div className="p-8 rounded-lg shadow-md bg-202020 bg-opacity-900 w-96">
          <h2 className="mb-6 text-2xl font-bold text-center text-white">
            Log In
          </h2>
          <form onSubmit={handleSubmit}>
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
                placeholder="Your Email"
                value={userInformation.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-white-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={userInformation.password}
                onChange={handleChange}
              />
            </div>
            <h6 className="text-right">Forgot Your Password?</h6>
            {error && <p className="text-red-500">{error}</p>}
            <br />
            <div className="mb-5">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <br />
              <Link to="/signUp">
                <h6 className="mt-10 text-left">
                  Don't have an account? Sign Up
                </h6>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
