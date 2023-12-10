import React, { useEffect, useState } from "react";
import TVShowCard from "./TVShowCard";
import { useNavigate } from "react-router-dom";

export type APIShow = {
  id: number;
  name: string;
  rating: {
    average: number;
  };
  image: {
    medium: string;
  };
};

export const Homepage = () => {
  const navigate = useNavigate();

  const handleShowClick = (id: number) => {
    navigate(`movies/${id}`);
  };
  const [shows, setShows] = useState<APIShow[]>([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  console.log(shows);

  return (
    <div>
      <div>
        <div className="p-16 tracking-wider">
          <div className="font-light">
            <p>TV Show and web series database.</p>
            <p>Create personalized schedules. Episode guide, cast, crew and</p>
            <p>character information</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-2/3 ">
        <div className="px-16 font-light text-xm tracking-wider">
          Last added shows
        </div>
        <div className="md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-6 sm:gap-4 md:gap-12 ">
            {shows.map((item) => {
              const { id, name, image } = item;
              const rating = item.rating.average;
              return (
                <TVShowCard
                  key={id}
                  image={image.medium}
                  title={name}
                  rating={rating}
                  onClick={() => handleShowClick(id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
