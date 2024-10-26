import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "../button/Button"; 

const Checkout = () => {
  const { id } = useParams(); 
  const location = useLocation();
  const { movie, selectedSeats, total } = location.state || {};
  
  
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showTicket, setShowTicket] = useState(false);

  if (!movie) {
    return <div className="p-10 text-center">No movie selected</div>;
  }

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handlePayment = () => {
    setShowTicket(true);
  };

  return (
    <div className="bg-black text-white p-10 mt-20">
      <h1 className="text-2xl font-bold mb-6">Check Out</h1>
      
      {showTicket ? (
        <div className="bg-gray-800 p-5 rounded-lg mt-6 text-center">
          <h2 className="text-xl font-bold mb-2">Your Ticket</h2>
          <p>{movie.title}</p>
          <p>Seats: {selectedSeats.join(", ")}</p>
          <p>Total: Rp {total.toLocaleString()}</p>
          <p className="text-gray-400">Enjoy the movie!</p>
        </div>
      ) : (
  
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-800 p-5 rounded-lg mb-6 md:mr-4 flex-1">
            <img src={movie.img} alt={movie.title} className="w-[150px] rounded-md shadow-lg mr-4" />
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p>Order ID: {Math.random().toString(36).substr(2, 9)}</p>
            <p>Seat: {selectedSeats.join(", ")}</p>
            <p>Total: Rp {total.toLocaleString()}</p>
            <p className="text-gray-400">Complete your payment in 15:00</p>
          </div>

          <div className="flex-1">
            <div className="flex flex-col space-y-4 mb-6">
              {["Saabank", "GoPay", "Shopee Pay", "ATM Card", "International payments"].map((method) => (
                <Button
                  key={method}
                  variant={`w-full h-12 rounded border-2 flex items-center justify-center ${
                    selectedPayment === method ? "bg-yellow-500 text-black" : "bg-transparent text-white"
                  }`}
                  style={{
                    borderColor: selectedPayment === method ? "transparent" : "yellow",
                  }}
                  onClick={() => handlePaymentSelection(method)}
                >
                  <span>{method}</span>
                </Button>
              ))}
            </div>
            <Button 
              variant="bg-yellow-500 text-black font-bold py-2 px-4 rounded w-full"
              onClick={handlePayment} 
            >
              PAY
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
