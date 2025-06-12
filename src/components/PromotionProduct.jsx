import { useNavigate } from "react-router-dom";
import Star from "./Star";

function ProductList({ product }) {
  const navigate = useNavigate();
  //   const description = product.description.trim();
  return (
    <div className="relative  bg-gray-100 p-4 shadow-xl rounded-lg md:m-3 md:w-[23%] md:h-[22rem]  mx-auto border border-gray-200 hover:shadow-2xl transition-shadow">
      <img
        src="/bg-product.webp"
        alt="Saree"
        className="absolute  top-0 left-0 w-full h-[100%] object-cover blur-[1px] rounded-lg"
      />
      <div className="absolute top-40 left-5 md:w-[12rem]  ">
        <p className="text-[18px]  text-gray-800  font-bold md:mb-2">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <span className=" text-[10px]">
            <Star size="17px" rating={product.rating} />
          </span>
        </div>
        <div className="flex  ">
          <p className="text-stone-900 text-2xl font-bold md:mr-4">
            $
            {product.discount
              ? product.price - product.discount
              : product.price}
          </p>
          {product.discount && (
            <p className="text-gray-700 text-xl line-through">
              ${product.price}
            </p>
          )}
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="mt-4 px-5 py-1 text-[19px] bg-stone-900 text-white  md:cursor-pointer hover:bg-indigo-600 transition"
        >
          Buy Now
        </button>
      </div>
      <img
        src="/bag.png"
        alt="Product"
        className="w-35 h-35 absolute top-35 left-50"
      />
    </div>
  );
}

export default ProductList;
