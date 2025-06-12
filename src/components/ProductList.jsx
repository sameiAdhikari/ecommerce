import { useNavigate } from "react-router-dom";
import Star from "./Star";

function ProductList({ product }) {
  const navigate = useNavigate();
  const description = product.description.trim();
  return (
    <div className="bg-gray-100 p-4 shadow-xl rounded-lg md:m-3 md:w-[22%]  mx-auto border border-gray-200  hover:shadow-2xl transition-shadow">
      <img
        src={`/${product.image}`}
        alt="Saree"
        className="w-full h-50 object-cover rounded-lg"
      />
      <div className="md:flex md:items-center md:justify-between mt-4 text-[18px]">
        <p className=" text-gray-800 ">{product.brand ? product.brand : ""}</p>
        {product.reviews && (
          <p className="text-gray-800"> {product.reviews} Reviews</p>
        )}
      </div>

      <h2 className="text-[20px]  font-semibold md:mt-1">{product.name}</h2>
      <p className="text-gray-600 md:text-md  md:leading-5">
        {description.length <= 70
          ? description
          : description.slice(0, 70) + "..."}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-gray-800 text-md font-semibold">
          Available: {product.stock}
        </span>
        <span className=" text-sm">
          {/* Rating: {product.rating} */}
          <Star size="20px" rating={product.rating} />
        </span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-indigo-500 text-2xl font-bold">${product.price}</p>
        <button
          onClick={() => {
            console.log("hello");
            navigate("/");
          }}
          className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-md md:cursor-pointer hover:bg-indigo-600 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductList;
