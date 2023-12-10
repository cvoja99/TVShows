import React, { useEffect, useState } from "react";
import TVShowCard from "./TVShowCard";
import { useNavigate } from "react-router-dom";

type Schedules = {
  id: number;
  name: string;
  rating: number;
  image: {
    medium: string;
  };
};

type APIShow = {
  id: number;
  name: string;
  rating: {
    average: number;
  };
  image: {
    medium: string;
  };
};
export const shows = [
  {
    id: 1,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 3,
  },
  {
    id: 2,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 5,
  },
  {
    id: 3,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 4,
  },
  {
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 3,
  },
  {
    id: 4,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 5,
  },
  {
    id: 5,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 4,
  },
  {
    id: 6,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 3,
  },
  {
    id: 7,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 5,
  },

  {
    id: 8,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 3,
  },
  {
    id: 9,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 5,
  },
  {
    id: 10,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 4,
  },
  {
    id: 11,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 3,
  },
  {
    id: 12,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 5,
  },
  {
    id: 13,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 4,
  },
  {
    id: 14,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 3,
  },
  {
    id: 15,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 5,
  },
  {
    id: 16,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 4,
  },
  {
    id: 17,
    title: "This is a title of the TV Show which is very long isn't it",
    rating: 4,
  },
];

export const Homepage = () => {
  const navigate = useNavigate();

  const handleShowClick = (id: number) => {
    navigate(`movies/${id}`);
  };
  const [schedules, setSchedules] = useState<APIShow[]>([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setSchedules(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  console.log(schedules);
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
        <div className="px-16">
          <div className="flex grid grid-cols-6 gap-12 ">
            {schedules.map((item) => {
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
