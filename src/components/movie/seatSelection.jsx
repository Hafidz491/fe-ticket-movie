import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { movieItems } from "../../constants/constants"; 

const SeatSelection = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const movie = movieItems.find((item) => item.id === parseInt(id));

  // Tambahkan console.log untuk memeriksa nilai ID dan movie
  console.log("Movie ID from URL:", id);
  console.log("Selected Movie:", movie);
  
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = 14; 
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Example: reserved seats (ini biasanya dari server)
  const reservedSeats = ['D6', 'D7', 'D9', 'E7', 'E10', 'H12'];

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

  return (
    <div className="bg-black text-white p-10">
      <h1 className="text-2xl font-bold mb-4">SELECT SEAT for {movie.title}</h1>
      <div className="grid grid-cols-14 gap-2 mb-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col">
            {Array.from({ length: columns }).map((_, colIndex) => {
              const seat = `${row}${colIndex + 1}`;
              const isReserved = reservedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);

              return (
                <button
                  key={seat}
                  className={`w-12 h-12 rounded border-2 ${
                    isReserved ? 'bg-yellow-600' : 
                    isSelected ? 'bg-yellow-500' : 'bg-gray-800'
                  }`}
                  disabled={isReserved}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p>Booking Seat: {selectedSeats.length}</p>
        <p>Total: Rp. {getTotal().toLocaleString()}</p>
        <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded mt-4">
          Buy Ticket
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;
