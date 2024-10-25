import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movieItems } from "../../constants/constants"; 
import { Button } from "../button/Button"; 

const SeatSelection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieItems.find((item) => item.id === parseInt(id));

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = 14;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const reservedSeats = []; // Set as empty to have all seats available initially

  if (!movie) {
    return <div className="p-10 text-center">Movie not found</div>;
  }

  const toggleSeat = (seat) => {
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seat)
        ? prevSelected.filter((s) => s !== seat)
        : [...prevSelected, seat]
    );
  };

  const getTotal = () => selectedSeats.length * 90000;

  const handleCheckout = () => {
    const total = getTotal();
    navigate(`/movie/${id}/seatSelection/checkout`, {
      state: {
        movie,
        selectedSeats,
        total,
      },
    });
  };



  return (
    <div className="bg-black text-white p-10 mt-20">
      <h1 className="text-xl font-bold mb-4">SELECT SEAT for {movie.title}</h1>
      
      <div className="flex justify-center mb-14 mt-14">
        <div className="bg-gray-700 text-white py-2 px-4 rounded w-1/2 text-center">SCREEN</div>
      </div>
      
      <div className="grid grid-cols-4 sm:grid-cols-10 lg:grid-cols-14 gap-2 mb-4 mt-4">
        {rows.map((row) =>
          Array.from({ length: columns }).map((_, colIndex) => {
            const seat = `${row}${colIndex + 1}`;
            const isReserved = reservedSeats.includes(seat);
            const isSelected = selectedSeats.includes(seat);

            return (
              <Button
                key={seat}
                variant={`w-12 h-12 rounded border-2 ${
                  isReserved ? 'bg-yellow-600' : 
                  isSelected ? 'bg-yellow-500' : 'bg-gray-800'
                }`}
                onClick={() => toggleSeat(seat)}
                disabled={isReserved}
              >
                {seat}
              </Button>
            );
          })
        )}
      </div>
      
      <div className="flex flex-col items-center mt-14">
        <p>Booking Seat: {selectedSeats.length}</p>
        <p>Total: Rp. {getTotal().toLocaleString()}</p>
        <Button 
          variant="bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-4" 
          onClick={handleCheckout}
        >
          Buy Ticket
        </Button>
      </div>
    </div>
  );
};

export default SeatSelection;
