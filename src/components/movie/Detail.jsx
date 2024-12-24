import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../../Utils/ApiEndpoint";
import { Button } from "../button/Button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="mt-20 text-center text-red-500">
          Something went wrong. Please try again later.
        </div>
      );
    }
    return this.props.children;
  }
}

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api.get(`/Movie/detail/${id}`);
        console.log("Berhasil mengambil detail movie");
        setMovieDetails(response.data);
      } catch (err) {
        setError("Error fetching movie details: " + err.message);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    let stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= filledStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ⭐
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400">
            ☆
          </span>
        );
      }
    }
    return stars;
  };

  const handleBuyTickets = () => {
    navigate(`/movie/${id}/seatSelection`);
  };

  return (
    <div className="p-10 mt-24 text-white bg-black">
      <h2 className="mb-4 text-2xl font-bold">Now Playing</h2>
      <div className="flex items-center mb-6">
        <Link to={`/movie/${id}/trailer`}>
          <img
            src={`http://localhost:5000/${movieDetails.imageUrl}`}
            alt={movieDetails.name}
            className="w-[150px] rounded-md shadow-lg mr-4 cursor-pointer"
          />
        </Link>
        <div>
          <h1 className="text-4xl font-bold">{movieDetails.name}</h1>
          <div className="flex items-center">
            {renderStars(movieDetails.rating)}
            <span className="ml-2 text-gray-400">({movieDetails.rating})</span>
          </div>
          <p className="mt-2 text-gray-400">
            Cast: {movieDetails.cast && movieDetails.cast.join(", ")}
          </p>
          <p className="text-gray-400">Producer: {movieDetails.producer}</p>
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
        <p className="mt-2">{movieDetails.description}</p>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Cinema</h3>
        <div className="mt-2">
          <select className="p-2 text-white bg-gray-800 border border-gray-600 rounded">
            <option value="jakarta">Jakarta</option>
          </select>
        </div>
        <h3 className="mt-5 text-xl font-semibold">Select Date & Time</h3>
        <div className="mt-2">
          <input
            type="date"
            className="p-2 mr-2 text-white bg-gray-800 border border-gray-600 rounded"
          />
          <input
            type="time"
            className="p-2 text-white bg-gray-800 border border-gray-600 rounded"
          />
        </div>
        <div className="mt-4">
          <p className="font-semibold">Cinema Options</p>
          <ul className="mt-2">
            <li className="p-2 mb-2 bg-gray-700 rounded">Cinema XXI</li>
            <li className="p-2 mb-2 bg-gray-700 rounded">OGV Theatres</li>
            <li className="p-2 bg-gray-700 rounded">
              Lotte Shopping Avenue XXI
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DetailWithBoundary = () => (
  <ErrorBoundary>
    <Detail />
  </ErrorBoundary>
);

export default DetailWithBoundary;
