import { useEffect, useState } from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaChevronRight, FaShippingFast } from "react-icons/fa";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { TiArrowRightThick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import {
  delivaryTime,
  formatedSoldNumber,
  formatPrice,
} from "../helper/helper";
import { updateOrderList, updateSelectItems } from "../reduxSlicers/appSlicers";
import { useRespectiveProduct } from "../services/useProducts";
import Spinner from "./Spinner";
import Star from "./Star";

function ElectronicPageDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [defaultCountry, setDefaultCountry] = useState("");
  const [imagePosition, setImagePosition] = useState(0);
  const selectItems = useSelector((state) => state.app.selectItems);
  const { product, isLoading } = useRespectiveProduct(productId);
  const localStorageOrderList =
    JSON.parse(localStorage.getItem("orderList")) || [];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        );
        const data = await response.json();
        setDefaultCountry(data.address.country);
      },
      (err) => {
        console.log(err.message);
      }
    );
    localStorage.setItem("recentView", JSON.stringify(product));
    window.scrollTo(0, 0);
  }, [product]);
  if (isLoading) return <Spinner />;

  const handleAddToCart = (productId) => {
    dispatch(updateOrderList({ productId, quantity }));
    if (!selectItems.includes(productId)) {
      dispatch(updateSelectItems([...selectItems, { productId, quantity }]));
    }
    const existingProductIndex = localStorageOrderList.findIndex(
      (item) => item.productId === productId
    );
    if (existingProductIndex !== -1) {
      localStorageOrderList[existingProductIndex].quantity = quantity;
    } else {
      localStorageOrderList.push({ productId, quantity });
    }
    localStorage.setItem("orderList", JSON.stringify(localStorageOrderList));
    navigate(-1);
  };
  const handleImageChange = (e) => {
    setImagePosition(e.target.dataset.id);
  };
  return (
    <div className="md:mt-25 h-auto flex  md:px-10 md:py-7 ">
      <div className="w-[50%] ">
        <div className="mt-3">
          <div className="flex gap-3 ">
            <div className="flex flex-col gap-4 h-fit">
              {product?.images.map((image, i) => {
                console.log(image);
                return (
                  <img
                    src={image}
                    key={i}
                    data-id={i}
                    className="w-[5rem] h-[6rem] cursor-pointer object-contain rounded p-1"
                    style={{
                      border: imagePosition == i ? "2px solid #4f46e5" : "",
                    }}
                    // onClick={(e) => handleImageChange(e)}
                    onMouseEnter={(e) => handleImageChange(e)}
                  />
                );
              })}
            </div>

            <img
              src={product?.images[imagePosition]}
              alt={product?.name}
              className={`md:w-[80%] md:h-[95vh] object-cover transition-filter duration-500 ${
                isImageLoaded ? "" : "blur-md"
              }`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="flex flex-col gap-[7px]">
          <div className="text-[1.4rem]">{product?.descriptions}</div>
          <div className="md:flex gap-2">
            <p className="text-gray-700">
              {product?.sold ? formatedSoldNumber(product?.sold) : 0} Sold |
            </p>
            <p className="cursor-pointer capitalize">
              sold by{" "}
              {product?.dealer ? (
                <span className="text-indigo-100 font-semibold capitalize">
                  {product?.dealer}
                </span>
              ) : (
                "Nishant"
              )}
            </p>
          </div>
          <div className=" flex gap-3">
            <Star rating={product?.ratings} size="1.8rem" />
            <span className="md:pr-2 md:text-[1.2rem] text-gray-700">
              {product?.reviews ? product.reviews : 0} Reviews
            </span>
          </div>
          <div className="relative md:w-20 md:mt-2 ">
            <select
              className="md:px-4 md:py-[1px] rounded text-xl cursor-pointer border-2 border-gray-400 focus:border-gray-700 hover:border-gray-700 "
              size={1}
              style={{
                overflowY: "auto",
                outline: "none",
                height: "auto",
                minHeight: "unset",
                maxHeight: "20rem", // controls dropdown height
              }}
              defaultValue={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 50 }, (_, i) => (
                <option key={i} value={i + 1} className="cursor-pointer">
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="border-b border-gray-600 mt-2 md:pb-5">
            <div className="flex gap-2 items-end ">
              <p className="text-3xl font-bold text-green-600 tracking-tight">
                {formatPrice(
                  product?.discount
                    ? product?.price - product?.discount
                    : product?.price
                )}
              </p>

              <p className="line-through text-gray-500 text-lg">
                {formatPrice(product?.price)}
              </p>
            </div>
            <div className=" text-2xl ">
              <p>
                <span className="font-bold">Subtotal :</span>{" "}
                {formatPrice(
                  (product?.discount
                    ? product?.price - product?.discount
                    : product?.price) * quantity
                )}
              </p>
            </div>
          </div>

          {product?.specification &&
            Object.entries(product?.specification).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className="grid grid-cols-[14rem_1fr] items-center gap-5"
                >
                  <div className="capitalize text-[1rem] font-semibold flex justify-between">
                    <span>{key}</span>
                    <span>:</span>
                  </div>
                  <p className="text-gray-700"> {value}</p>
                </div>
              );
            })}

          {product?.additional_description && (
            <div>
              <div>
                <h3 className="capitalize text-[1.5rem] font-semibold mt-5">
                  about this items
                </h3>
                <p>{product?.additional_description}</p>
              </div>
            </div>
          )}
          <div className="md:w-full md:border-t md:border-gray-700 md:py-3">
            <div className="md:mb-3 text-indigo-500">
              <span className="capitalize ">deliver</span> to {defaultCountry}
              {}
            </div>
            <button
              className="md:w-[80%] float-left md:py-1 md:px-2 rounded-full bg-indigo-500 text-[1.4rem] capitalize text-stone-100 cursor-pointer"
              onClick={() => handleAddToCart(product?.id)}
            >
              add to cart
            </button>
          </div>

          {/* <div className="flex  mt-2 ">
            <button className="py-2 px-[31%] rounded-full cursor-pointer text-stone-100 bg-amber-500">
              check your bucket
            </button>
          </div> */}

          <div>
            <div>
              <div className="flex items-center gap-3 text-[1.15rem] cursor-pointer text-green-600 font-semibold ">
                <FaShippingFast />
                <p className="hover:underline mr-[-7px]">Free Shipping</p>
                <FaChevronRight className="text-[0.9rem]" />
              </div>
              <div className="w-[55%] h-auto my-2 mx-8 px-4 py-2 bg-gray-300 flex flex-col gap-1">
                <div className="flex text-green-600">
                  <h3 className="capitalize">standard:</h3>
                  <p className="capitalize ml-2"> free</p>
                </div>
                <div className="flex">
                  <h3 className="capitalize">delivary:</h3>
                  <p className="capitalize ml-2">
                    {delivaryTime(15)} - {delivaryTime(21)}
                  </p>
                </div>
                <div>
                  Get a credit for delivary later than {delivaryTime(21)}
                </div>
                <div className="flex gap-2">
                  <h3>Courier company:</h3>
                  <div>
                    <div className="flex items-center">
                      <img
                        src="../../public/pay/MALTA-POST.SVG"
                        className="w-[1.5rem] h-[1.2rem]"
                      />
                      <p>MaltaPost</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[1.15rem] cursor-pointer text-green-600 font-semibold ">
              <TbTruckReturn />
              <p className="hover:underline mr-[-7px]">Hastle free return</p>
              <FaChevronRight className="text-[0.9rem]" />
            </div>
            <div>
              <div className="flex items-center gap-3 text-[1.15rem] cursor-pointer text-green-600 font-semibold ">
                <AiOutlineSafety />
                <p className="hover:underline mr-[-6px]">Shipping security </p>
                <FaChevronRight className="text-[0.9rem]" />
              </div>
              <div className="md:ml-10 flex flex-row flex-wrap gap-5 ">
                <p className="capitalze flex items-center gap-0">
                  <TiArrowRightThick /> Safe payment options
                </p>
                <p className="capitalze flex items-center gap-0">
                  <TiArrowRightThick /> secure logistics
                </p>
                <p className="capitalze flex items-center gap-0">
                  <TiArrowRightThick /> secure logistics
                </p>
                <p className="capitalze flex items-center gap-0">
                  <TiArrowRightThick /> purchase protection
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer ">
            <span className="text-[22px]">
              <MdOutlineReportGmailerrorred />
            </span>
            <p className="text-indigo-600 font-semibold hover:text-indigo-400">
              Report a bad experience with this product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectronicPageDetails;
