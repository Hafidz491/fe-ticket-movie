import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'admin@example.com' && password === 'password123') {
            alert('Login berhasil!');
        } else {
            setError('Email atau password salah');
        }
    };

    return (
        <div className="bg-gray flex items-center justify-center">
            <div className="w-full h-full bg-black flex items-center justify-center mt-24 mb-24">
                <div className="bg-gradient-to-r from-141414 to-202020 bg-opacity-900 shadow-md rounded-lg p-8 w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
                                Re-Enter Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <p className="error">{error}</p>}
                        <br />
                        <div className="mb-4">
                            <Link to="/login">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </Link>
                            <br />
                            <Link to="/login">
                                <h6 className='text-left mt-10'>Have an account? Login</h6>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;


