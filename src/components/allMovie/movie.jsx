import React from "react";
import { useEffect, useState } from "react";
import api from "../../Utils/ApiEndpoint";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

export const Movie = () => {
  const [allMovie, setAllMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/Movie/all-movie");
        if (response.data && response.data.movies) {
          setAllMovie(response.data.movies);
        } else {
          console.log("Error: ", response.data);
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-10 py-5">
      {/* <div className="flex justify-between">
                <h1 className="text-4xl font-bold">
                    The Best Movie Recomendation
                    <br />& the Latest Movies from us
                </h1>
                <h3 className="text-right font-light text-2xl text-[#9CA4AB]">
                    Enjoy Various films that we have
                    <br />
                    recommended for you and your familly
                </h3>
            </div> */}
      <div className="mt-14">
        <div>
          {/* <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Now Playing</h1>
                        <Button variant="bg-btnPrimary w-[100px] h-[45px]">See All</Button>
                    </div> */}
          <h1 className="mt-20 text-2xl font-bold">Movie Playing</h1>
          <div className="flex flex-wrap items-center gap-10">
            {allMovie.length > 0 ? (
              allMovie.map((item) => (
                <div
                  key={item._id}
                  className="card-image h-[400px] w-[250px] rounded  mt-10 gap-1"
                >
                  <img
                    src={`http://localhost:5000/${item.imageUrl}`}
                    alt={item.name}
                    className="rounded-md"
                  />
                  <div className="flex justify-between">
                    <div className="mt-3">
                      <h1 className="font-bold text-md">{item.name}</h1>
                      <h3 className="text-[#9CA4AB]">{item.year}</h3>
                    </div>
                    <div className="mt-3">
                      <Button
                        variant="bg-btnPrimary w-[60px] h-[25px]"
                        link={`/movie/${item.id}`}
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-2xl font-bold">No Movie </h1>
            )}
          </div>
        </div>
        <div className="mt-14">
          {/* <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Comingsoon</h1>
                        <Link to="/login"><Button variant="bg-btnPrimary w-[100px] h-[45px]">See All</Button></Link>
                    </div> */}
        </div>
      </div>
    </div>
  );
};
