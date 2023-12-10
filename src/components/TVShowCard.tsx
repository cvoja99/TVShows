import React from "react";
import reactSVG from "../assets/react.svg";
interface TVShowCardProps {
  title: string;
  rating: number;
  image: string;
  onClick: () => void;
}

const TVShowCard: React.FC<TVShowCardProps> = ({
  title,
  rating,
  image,
  onClick,
}) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < rating / 2 ? "text-yellow-500" : "text-gray-400"}
    >
      ★
    </span>
  ));

  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded-lg shadow-lg text-center  my-10"
    >
      <div className="mb-2">
        <div className="justify-center flex">
          <img src={image} className="w-32 h-48" />
        </div>
        <div>{stars}</div>
      </div>
      <div className="justify-center flex ">
        <p className="text-gray-800 text-start text-sm self-start mx-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default TVShowCard;
