import React from "react";
import TVShowCard from "./TVShowCard";
export const Homepage = () => {
  const shows = [
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 3,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 5,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 4,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 3,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 5,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 4,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 3,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 5,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 4,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 3,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 5,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 4,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 3,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 5,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 4,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 3,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 5,
    },
    {
      title: "This is a title of the TV Show which is very long isn't it",
      rating: 4,
    },
    // Add more shows as needed
  ];
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
            {shows.map((show, index) => (
              <TVShowCard key={index} title={show.title} rating={show.rating} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
