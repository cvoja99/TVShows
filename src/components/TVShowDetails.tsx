import React from "react";
import { useParams } from "react-router-dom";
import { shows } from "./Homepage";
export const TVShowDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSchedules(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  console.log(foundShow);
  return <div>hey {foundShow!.id}</div>;
};
