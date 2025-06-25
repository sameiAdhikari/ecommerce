import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import Star from "../components/Star";
import { updatePriceRange } from "../reduxSlicers/appSlicers";

function ProductSidebar() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRangeIndex, setSelectedRangeIndex] = useState(null);
  const [selectPriceIndex, setSelectPriceIndex] = useState(null);
  const rating = Number(searchParams.get("rating")) || 1;

  const handlePriceRange = (index, data) => {
    if (selectPriceIndex === index) {
      setSelectPriceIndex(null);
      dispatch(updatePriceRange({}));
    } else {
      setSelectPriceIndex(index);
      dispatch(updatePriceRange(data));
    }
    // setSelectPriceIndex(index);
  };

  const handleProductRating = (index) => {
    if (selectedRangeIndex === index) {
      setSelectedRangeIndex(null);
    } else {
      setSelectedRangeIndex(index);
    }

    if (rating === 5 - index) {
      searchParams.set("rating", 1);
      setSearchParams(searchParams);
    } else {
      searchParams.set("rating", 5 - index);
      setSearchParams(searchParams);
    }
  };
  return (
    <div className=" md:py-5 md:pl-[2rem]  border-t border-b border-gray-400">
      <div>
        <h3 className="md:text-xl md:font-semibold md:mt-3">Price Range</h3>
        <div className="flex flex-col">
          {Array.from({ length: 3 }, (_, index) => {
            const isChecked = selectPriceIndex === index;
            return (
              <div
                className="md:flex md:items-center gap-3 md:pl-4 hover:text-indigo-500 transition-colors duration-100 cursor-pointer"
                key={index}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() =>
                    handlePriceRange(index, {
                      min: index * 1000,
                      max: index * 1000 + 1000,
                    })
                  }
                  className="md:w-4 md:h-4 cursor-pointer"
                />
                {index === 2 ? (
                  <label>${index * 1000} & Above </label>
                ) : (
                  <label>
                    ${index * 1000}-${index * 1000 + 1000}
                  </label>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="md:text-xl md:mt-3 md:font-semibold">Ratings</h3>
        {Array.from({ length: 5 }, (_, index) => {
          const isChecked = selectedRangeIndex === index;
          return (
            <div
              className="md:pl-4 md:flex md:items-center gap-1 md:py-2"
              key={index + 10}
            >
              <input
                type="checkbox"
                className="md:w-4 md:h-4 cursor-pointer"
                checked={isChecked}
                onChange={() => handleProductRating(index)}
              />
              {index === 0 ? (
                <div className="flex gap-1 items-center">
                  <Star
                    ratingLength={5 - index}
                    rating={5 - index}
                    size="16px"
                  />
                  only
                </div>
              ) : (
                <div className="flex gap-1 items-center">
                  <Star
                    ratingLength={5 - index}
                    rating={5 - index}
                    size="16px"
                  />
                  & Up
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSidebar;
