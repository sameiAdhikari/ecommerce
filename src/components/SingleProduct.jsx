import { AiFillFire } from "react-icons/ai";
import { formatedSoldNumber } from "../helper/helper";
import Star from "./Star";
import { addDays, format } from "date-fns";
import { useNavigate } from "react-router";

function SingleProduct({ product }) {
  const navigate = useNavigate();
  const description = product.shortDescription.trim();
  const today = new Date();

  return (
    <div className="md:p-3 bg-gray-100  md:pb-6  shadow-xl rounded-lg md:m-3 md:mt-3 md:w-[30%]  mx-auto border border-gray-200  hover:shadow-2xl transition-shadow">
      <div>
        <img
          src={`/${product.image}`}
          alt="Saree"
          className="w-full h-60 object-cover rounded-lg"
        />
      </div>

      <div>
        <div>
          <p className="font-semibold  md:text-md my-2 md:leading-5">
            {description.length <= 90
              ? description
              : description.slice(0, 90) + "..."}
          </p>
          <div className="flex items-center justify-between md:mt-3">
            <span className="text-gray-800 text-md font-semibold">
              Available: {product.stock}
            </span>
            <span className=" text-sm">
              <Star size="20px" rating={product.rating} />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 md:mt-2 capitalize">
          <span>{`${formatedSoldNumber(product.sold)}`}</span> sold last month{" "}
          {product.sold >= 100 && (
            <span>
              <AiFillFire className="text-xl text-orange-400" />
            </span>
          )}
        </div>
        {product.sold >= 80 ? (
          <div>
            <span className="text-green-600 capitalize">
              Best selling item{" "}
            </span>
            in {product.category}
          </div>
        ) : (
          <p>Try out for better experience</p>
        )}
        {/* <div className="md:my-2">
          {product.limitedeal && (
            <span className="bg-red-500 md:px-[4px]">Limited time deal</span>
          )}
        </div> */}
        {/* {product.voucherDiscount && (
          <div>
            <span className="bg-green-500 md:px-[4px]">
              save {product.voucherDiscount}%
            </span>{" "}
            with vouchers
          </div>
        )} */}

        <div className="mt-2">
          <p className="">
            <span className="text-indigo-500 text-2xl font-bold">
              ${product.price - (product.discount || 0)}
            </span>
            {product.discount && (
              <span className="md:ml-2 font-semibold text-[16px] text-gray-500">
                was:
                <span className=" md:ml-1 line-through  ">
                  ${product.price}
                </span>
              </span>
            )}
          </p>
          <button
            onClick={() => {
              console.log("hello");
              navigate("/");
            }}
            className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-md md:cursor-pointer hover:bg-indigo-600 transition"
          >
            Add to Cart
          </button>
        </div>
        <div className="md:flex md:mt-2">
          {
            product.fastestDelivary && (
              <div>
                Fastest Delivary
                <strong className="md:ml-2">
                  {format(
                    addDays(
                      today,
                      product.fastestDelivary
                    ).toLocaleDateString(),
                    "dd/MM/yyyy"
                  )}
                </strong>
              </div>
            )
            //  :
            //   <p>we are commited to fastest </p>
          }
          {/* {product.lateDelivary && (
            <div>
              Late Delivary
              <strong>
                {format(
                  addDays(new Date(), 15).toLocaleDateString(),
                  "dd/MM/yyyy"
                )}
              </strong>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
