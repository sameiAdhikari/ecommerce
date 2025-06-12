import { CiStar } from "react-icons/ci";
import { HiOutlineStar } from "react-icons/hi";

function Star({ rating, size, ratingLength }) {
  return (
    <span className="flex items-center gap-1">
      {Array.from({ length: ratingLength || 5 }, (_, i) => (
        <button key={i + 50}>
          <HiOutlineStar
            className={`text-[${size}] text-yellow-500 cursor-pointer  ${
              i < Math.floor(rating) ? "fill-yellow-500" : ""
            }`}
          />
        </button>
      ))}
    </span>
  );
}

export default Star;
