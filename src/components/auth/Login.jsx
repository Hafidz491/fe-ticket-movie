import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./authContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const validEmail = 'test@example.com';
        const validPassword = '123';

        if (email === validEmail && password === validPassword) {
            const userData = { email };
            login(userData);
            navigate('/'); 
        } else {
            setError('Email atau password salah');
        }
    };

    return (
        <div className="bg-black flex items-center justify-center">
            <div className="w-full h-full bg-light bg-black flex items-center justify-center mt-24 mb-24">
                <div className="bg-202020 bg-opacity-900 shadow-md rounded-lg p-8 w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">Log In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <h6 className='text-right'>Forgot Your Password?</h6>
                        {error && <p className="text-red-500">{error}</p>}
                        <br />
                        <div className="mb-5">
                            <button
                                className="bg-yellow-500 hover:bg-yellow-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
                            </button>
                            <br />
                            <Link to="/signUp">
                                <h6 className='text-left mt-10'>Don't have an account? Sign Up</h6>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
