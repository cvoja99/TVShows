import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Show = {
  id: number;
  name: string;
  description: string;
  rating: number;
  actors: {
    personName: string;
    characterName: string;
    image: string;
  }[];
  image: string;
  streamedOn: string;
  schedule: string;
  status: string;
  genres: string;
};

type APIShow = {
  id: number;
  name: string;
  summary: string;
  rating: {
    average: number;
  };
  _embedded: {
    cast: [
      {
        person: { name: string; image: { medium: string } };
        character: { name: string };
      }
    ];
  };
  image: { medium: string };
  network: { name: string };
  schedule: { days: string[] };
  status: string;
  genres: string[];
};
export const TVShowDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [show, setShow] = useState<Show>();
  useEffect(() => {
    if (id) {
      fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then((response) => response.json())
        .then((data: APIShow) => {
          setShow({
            id: data.id,
            name: data.name,
            description: data.summary,
            rating: data.rating.average,
            actors: data._embedded.cast.map((item) => ({
              personName: item.person.name,
              characterName: item.character.name,
              image: item.person.image.medium,
            })),
            image: data.image.medium,
            streamedOn: data.network.name,
            schedule: data.schedule.days.join(", "),
            status: data.status,
            genres: data.genres.join(". "),
          });
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, [id]);
  console.log(show);
  const stars = Array.from(
    { length: 5 },
    (_, index) =>
      show && (
        <span
          key={index}
          className={
            index < show.rating / 2 ? "text-yellow-500" : "text-gray-400"
          }
        >
          ★
        </span>
      )
  );
  return (
    show && (
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          <img src={show.image} />
          <div>
            <div className="flex items-center py-6">
              <div>{stars}</div>
              <span className="ml-2 text-sm text-gray-600">
                {show.rating / 2}/5
              </span>
            </div>
            <h1 className="text-2xl font-bold">{show.name}</h1>
            <h3
              className="py-6"
              dangerouslySetInnerHTML={{ __html: show.description }}
            ></h3>
          </div>

          {/* Right side: Title, Rating, and Info */}
          <div className="md:col-span-2">
            {/* Title and Rating */}

            {/* Show Info and Cast */}
            <div className="md:grid md:grid-cols-2 gap-4">
              {/* Show Info */}
              <div>
                <h2 className="text-lg font-semibold mt-4 mb-2">Show Info</h2>
                <p className="py-7">Streamed on: {show.streamedOn}</p>
                <p className="py-7">Schedule: {show.schedule}</p>
                <p className="py-7">Status: {show.status}</p>
                <p className="py-7">Genres: {show.genres}</p>
              </div>

              {/* Starring */}
              <div>
                <h2 className="text-lg font-semibold mt-4 mb-2">Starring </h2>
                {show.actors.slice(0, 4).map((actor, index) => (
                  <p key={index} className="flex items-center py-4">
                    <img
                      src={actor.image}
                      className="h-12 w-12 rounded-full bg-gray-400 mr-2"
                    />
                    {actor.personName} as {actor.characterName}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
