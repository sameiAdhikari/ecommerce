import { AiFillFire } from "react-icons/ai";
import { formatedSoldNumber } from "../helper/helper";
import Star from "./Star";
import { addDays, format } from "date-fns";
// import { useNavigate } from "react-router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SingleProduct({ product }) {
  const navigate = useNavigate();
  const description = product?.short_description.trim();
  const [isHover, setIshover] = useState(false);
  const today = new Date();
  const handleNavigate = (productId) => {
    navigate(`/products/${productId}`);
  };
  const handleMouseEnter = () => {
    setIshover((c) => !c);
  };
  const handleMouseLeave = () => {
    setIshover((c) => !c);
  };

  return (
    <div
      className="md:p-2   md:pb-6 cursor-pointer  rounded-lg md:mr-2 md:mt-3   mx-auto border border-gray-400  hover:shadow-2xl hover:shadow-indigo-600 transition-shadow"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-60" onClick={() => handleNavigate(product?.id)}>
        <img
          src={product?.images?.[0]}
          alt="Saree"
          className="w-full h-full object-cover rounded-lg   transition-all duration-300"
          style={{ scale: isHover ? "102%" : "" }}
        />
      </div>

      <div>
        <div>
          <p className="text-[1.2rem] pt-2">
            <span className="font-semibold text-indigo-100">Brand :</span>{" "}
            {product.brand}
          </p>
          <p className="font-semibold  md:text-md  md:leading-5">
            {description.length <= 90
              ? description
              : description.slice(0, 90) + "..."}
          </p>
          <div className="flex items-center justify-between md:mt-3">
            <span className=" text-[1.2rem]">
              Available:<span className="font-semibold"> {product?.stock}</span>
            </span>
            <span className=" text-sm flex gap-2">
              <Star size="22px" rating={product?.ratings} />
              <p>( {product?.ratings} )</p>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1  capitalize">
          <span className="font-semibold">{`${formatedSoldNumber(
            product?.sold
          )}`}</span>{" "}
          sold as of now
          {product.sold >= 10000 && (
            <span>
              <AiFillFire className="text-[1.2rem] text-orange-400" />
            </span>
          )}
        </div>
        {product.sold >= 100000 ? (
          <div>
            <span className="text-green-600 capitalize">
              most popular product
            </span>
            in {product?.category}
          </div>
        ) : (
          <p>Hidden gem — Explore and Enjoy</p>
        )}

        <div className="mt-2">
          <p className="">
            <span className="text-indigo-500 text-2xl font-bold">
              ${(product?.price - (product?.discount || 0)).toFixed(2)}
            </span>
            {product.discount > 0 && (
              <span className="md:ml-2 font-semibold text-[16px] text-gray-500">
                was:
                <span className=" md:ml-1 line-through  ">
                  ${product?.price}
                </span>
              </span>
            )}
          </p>
          <button
            onClick={() => handleNavigate(product?.id)}
            className="mt-4 px-6 py-2 bg-indigo-900 text-white rounded-md md:cursor-pointer hover:bg-stone-800 transition"
          >
            Buy Now
          </button>
        </div>
        <div className="md:flex md:mt-2">
          {product.fastestDelivary && (
            <div>
              Fastest Delivary
              <strong className="md:ml-2">
                {format(
                  addDays(today, product?.fastestDelivary).toLocaleDateString(),
                  "dd/MM/yyyy"
                )}
              </strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
