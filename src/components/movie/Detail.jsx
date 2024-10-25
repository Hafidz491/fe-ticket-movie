import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movieItems } from "../../constants/constants"; 
import { Button } from "../button/Button"; // Import your Button component

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieItems.find((item) => item.id === parseInt(id));

  if (!movie) {
    return <div className="p-10 text-center">Movie not found</div>;
  }

  const renderStars = (rating) => {
    const totalStars = 5; // Total number of stars to show
    const filledStars = Math.round(rating); // Number of filled stars based on the rating
    let stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= filledStars) {
        stars.push(<span key={i} className="text-yellow-400">⭐</span>); // Filled star
      } else {
        stars.push(<span key={i} className="text-gray-400">☆</span>); // Empty star
      }
    }
    return stars; 
  };

  const handleBuyTickets = () => {
    navigate(`/movie/${id}/seatSelection`); // Redirect to seat selection page
  };

  return (
    <div className="bg-black text-white p-10 mt-24">
      <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
      <div className="flex items-center mb-6">
        <img src={movie.img} alt={movie.title} className="w-[150px] rounded-md shadow-lg mr-4" />
        <div>
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <div className="flex items-center">
            {renderStars(movie.rating)} {/* Render stars based on the rating */}
            <span className="text-gray-400 ml-2">({movie.rating})</span>
          </div>
          <p className="text-gray-400 mt-2">Genre: {movie.genre}</p>
          <p className="text-gray-400">Director: {movie.director}</p>
          <Button 
            variant="bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-4"
            onClick={handleBuyTickets}
          >
            Buy Tickets
          </Button>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Storyline</h3>
        <p className="mt-2">{movie.storyline}</p>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Cinema</h3>
        <div className="mt-2">
          <select className="bg-gray-800 text-white border border-gray-600 rounded p-2">
            <option value="jakarta">Jakarta</option>
          </select>
        </div>
        <h3 className="text-xl font-semibold mt-5">Select Date & Time</h3>
        <div className="mt-2">
          <input
            type="date"
            className="bg-gray-800 text-white border border-gray-600 rounded p-2 mr-2"
          />
          <input
            type="time"
            className="bg-gray-800 text-white border border-gray-600 rounded p-2"
          />
        </div>
        <div className="mt-4">
          <p className="font-semibold">Cinema Options</p>
          <ul className="mt-2">
            <li className="bg-gray-700 p-2 rounded mb-2">Cinema XXI</li>
            <li className="bg-gray-700 p-2 rounded mb-2">OGV Theatres</li>
            <li className="bg-gray-700 p-2 rounded">Lotte Shopping Avenue XXI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
