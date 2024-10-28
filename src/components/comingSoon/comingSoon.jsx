import React from 'react';
import { movieItems } from "../../constants/constants";
import { Button } from "../button/Button";
import { Link } from 'react-router-dom';

export const Comingsoon = () => {
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
                    {/* <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Now Playing</h1>
                        <Button variant="bg-btnPrimary w-[100px] h-[45px]">See All</Button>
                    </div> */}
                    <h1 className="text-2xl font-bold mt-20">ComingSoon</h1>
                    <div className="flex gap-10 justify-center items-center">
                        {movieItems.map((item) => (
                            <div key={item.id} className="mt-10">
                                <img src={item.img} alt={item.title} className="rounded-md" />
                                <div className="flex justify-between">
                                    <div className="mt-3">
                                        <h1 className="text-xl font-bold">{item.title}</h1>
                                        <h3 className="text-[#9CA4AB]">{item.year}</h3>
                                    </div>
                                    <div className="mt-3">
                                    <button class="bg-gray-500 text-white w-[60px] h-[25px] hover:bg-gray-700">
                                        Pending
                                    </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-14">
                    {/* <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Comingsoon</h1>
                        <Link to="/login"><Button variant="bg-btnPrimary w-[100px] h-[45px]">See All</Button></Link>
                    </div> */}
                    
                </div>
            </div>
        </div>
    );
};