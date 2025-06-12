import { useNavigate } from "react-router-dom";
import Star from "./Star";
import { AiFillFire } from "react-icons/ai";

function SingleProduct({ product }) {
  // console.log(product.colors);
  const navigate = useNavigate();
  const description = product.description.trim();
  return (
    <div className=" bg-gray-100 p-4 shadow-xl rounded-lg md:m-3 md:w-[30%]  mx-auto border border-gray-200  hover:shadow-2xl transition-shadow">
      <div>
        <img
          src={`/${product.image}`}
          alt="Saree"
          className="w-full h-70 object-cover rounded-lg"
        />
      </div>

      <div className=" ">
        <div>
          <p className="font-semibold text-justify md:text-md my-2 md:leading-5">
            {description.length <= 135
              ? description
              : description.slice(0, 135) + "..."}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-gray-800 text-md font-semibold">
              Available: {product.stock}
            </span>
            <span className=" text-sm">
              <Star size="20px" rating={product.rating} />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span>{product.sold}</span>K+ sold last month{" "}
          {product.sold >= 100 && (
            <span>
              <AiFillFire className="text-xl text-orange-400" />
            </span>
          )}
        </div>
        {product.sold >= 80 && (
          <div>
            <span className="text-green-600 capitalize">
              Best selling item{" "}
            </span>
            in {product.category}
          </div>
        )}
        <div className="md:my-2">
          <span className="bg-red-500 md:px-[4px]">Limited time deal</span>
        </div>
        <div>
          <span className="bg-green-500 md:px-[4px]">save 10%</span> with
          vouchers
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="">
            <span className="text-indigo-500 text-2xl font-bold">
              ${product.price - (product.discount || 0)}
            </span>
            {product.discount && (
              <span className="text-[16px] md:ml-2 line-through text-gray-500 font-semibold">
                ${product.price}
              </span>
            )}
          </p>
          {/* <button
            onClick={() => {
              console.log("hello");
              navigate("/");
            }}
            className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-md md:cursor-pointer hover:bg-indigo-600 transition"
          >
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
