import React from "react";
import { useNavigate } from "react-router-dom";

export const Button = (props) => {
  const { variant, children, onClick, link } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link); 
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${variant}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
