import { CiStar } from "react-icons/ci";
import { HiOutlineStar } from "react-icons/hi";

function Star({ rating, size, ratingLength }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: ratingLength || 5 }, (_, i) => {
        let filledStars;
        if (i < Math.floor(rating)) {
          filledStars = 100;
        } else if (i === Math.floor(rating) && rating % 1 !== 0) {
          filledStars = (rating % 1) * 100;
        } else {
          filledStars = 0;
        }
        return (
          <button
            key={i + 50}
            className="relative"
            style={{ width: size, height: size }}
          >
            <HiOutlineStar className="text-yellow-500 w-full h-full cursor-pointer" />
            <HiOutlineStar
              className=" fill-yellow-500 text-yellow-500 w-full h-full absolute top-0 left-0"
              style={{ clipPath: `inset(0 ${100 - filledStars}% 0 0)` }}
            />
          </button>
        );
      })}
    </div>
  );
}

export default Star;
