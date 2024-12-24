import { useEffect, useState } from "react";
import api from "../../Utils/ApiEndpoint";

import { movieItems } from "../../constants/constants";
import { Button } from "../button/Button";

export const MainSection = () => {
  const [moviePlaying, setMoviePlaying] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/Movie/all-movie");
        if (response.data && response.data.movies) {
          setMoviePlaying(response.data.movies);
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
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          The Best Movie Recomendation
          <br />& the Latest Movies from us
        </h1>
        <h3 className="text-right font-light text-2xl text-[#9CA4AB]">
          Enjoy Various films that we have
          <br />
          recommended for you and your familly
        </h3>
      </div>
      <div className="mt-14">
        <div className="mt-14">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Now Playing</h1>
              <Button
                variant="bg-btnPrimary w-[100px] h-[45px]"
                link={`/movie`}
              >
                See All
              </Button>
            </div>
            <div className="flex items-center justify-center">
              {moviePlaying.length > 0 ? (
                moviePlaying.map((movie) => (
                  <div
                    key={movie._id}
                    className="card-image h-[400px] w-[200px] rounded mr-2  mt-10 gap-5"
                    style={{ marginRight: "8px" }}
                  >
                    <img
                      src={`http://localhost:5000/${movie.imageUrl}`}
                      alt={movie.name}
                      className="rounded-md w-[200px] h-[300px]"
                    />
                    <div className="flex justify-between w-[200px]">
                      <div className="mt-3">
                        <h1 className="text-lg font-bold">{movie.name}</h1>
                        <h3 className="text-[#9CA4AB]">{movie.year}</h3>
                      </div>
                      <div className="mt-3">
                        <Button
                          variant="bg-btnPrimary w-[60px] h-[25px]"
                          link={`/movie/${movie._id}`}
                        >
                          Book
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>Movie Not Found</h1>
              )}
            </div>
          </div>
        </div>
        <div className="mt-14">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Comingsoon</h1>
            <Button
              variant="bg-btnPrimary w-[100px] h-[45px]"
              link={`/comingsoon`}
            >
              See All
            </Button>
          </div>
          <div className="flex items-center justify-center gap-10">
            {movieItems.map((item) => (
              <div key={item.id} className="mt-10">
                <img src={item.img} alt={item.title} className="rounded-md" />
                <div className="flex justify-between">
                  <div className="mt-3">
                    <h1 className="text-xl font-bold">{item.title}</h1>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
