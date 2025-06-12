import { useDispatch, useSelector } from "react-redux";
import Star from "../components/Star";
import {
  setCategory,
  setIsCheckedRange,
  setProductRating,
} from "../reduxSlicers/appSlicers";

const categories = [
  "Home & Kitchen ",
  "Electornics",
  "clothing",
  "books",
  "beauty & Personl care",
  "shoes",
  "dolls",
  "others",
];
function ProductSidebar() {
  const dispatch = useDispatch();
  const isCheckedRange = useSelector((state) => state.app.isCheckedRange);
  const productRating = useSelector((state) => state.app.productRating);

  const handleProductCategory = (category) => {
    dispatch(setCategory(category));
  };

  const handlePriceRange = (index, data) => {
    console.log(data);
    dispatch(setIsCheckedRange(index));
  };

  const handleProductRating = (rating) => {
    dispatch(setProductRating(rating));
  };
  return (
    <div className="md:bg-stone-100 md:py-5 md:px-4 ">
      <div>
        <h3 className="md:text-xl md:font-semibold">Category</h3>
        <div className=" md:pl-4  ">
          {categories.map((category) => (
            <div key={category.replace(" ", "")}>
              <button
                className="capitalize hover:text-indigo-500 cursor-pointer"
                onClick={() => handleProductCategory(category)}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="md:text-xl md:font-semibold md:mt-3">Price Range</h3>
        <div className="flex flex-col">
          {Array.from({ length: 3 }, (_, index) => {
            return (
              <div
                className="md:flex md:items-center gap-3 md:pl-4 hover:text-indigo-500 transition-colors duration-100 cursor-pointer"
                key={index + 5}
              >
                <input
                  type="checkbox"
                  checked={isCheckedRange[index]}
                  onChange={() =>
                    handlePriceRange(index, {
                      minimum: index * 1000,
                      maximum: index * 1000 + 1000,
                    })
                  }
                  className="md:w-4 md:h-4 cursor-pointer"
                />
                {index === 2 ? (
                  <label>Above ${index * 1000}</label>
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
        {Array.from({ length: 5 }, (_, index) => (
          <div
            className="md:pl-4 md:flex md:items-center gap-3 md:py-2"
            key={index + 10}
          >
            <input
              type="checkbox"
              className="md:w-4 md:h-4 cursor-pointer"
              checked={productRating[index]}
              onChange={() => handleProductRating(index)}
            />
            <p className="flex">
              <Star ratingLength={5 - index} rating={5 - index} size="18px" />
              {/* <span className="md:ml-2"> {5 - index} Star</span> */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSidebar;
