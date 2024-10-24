import React from "react";
import { useNavigate } from "react-router-dom";

export const Button = (props) => {
  const { variant, children, onClick, link } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link); // Arahkan ke tautan jika ada
    } else if (onClick) {
      onClick(); // Jalankan fungsi onClick jika ada
    }
  };

  return (
    <button
      className={`text-white drop-shadow-lg rounded-md ${variant}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
