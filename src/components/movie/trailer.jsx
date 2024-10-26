import React from "react";
import { useParams } from "react-router-dom";
import { movieItems } from "../../constants/constants";

const Trailer = () => {
  const { id } = useParams();
  const movie = movieItems.find((item) => item.id === parseInt(id));

  if (!movie) {
    return <div className="p-10 text-center">Movie not found</div>;
  }

  return (
    <div className="bg-black text-white p-10 mt-20">
      <h1 className="text-xl font-bold mb-4">Watch Trailer for {movie.title}</h1>
      <div className="flex justify-center mb-10">
        <iframe
          width="80%"
          height="450"
          src={`https://www.youtube.com/`} 
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-md shadow-lg"
        ></iframe>
      </div>
      
      <div className="text-center mt-14">
        <p className="text-gray-400">Enjoy the trailer for {movie.title}!</p>
      </div>
    </div>
  );
};

export default Trailer;
