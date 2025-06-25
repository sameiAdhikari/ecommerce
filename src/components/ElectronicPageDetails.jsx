// import { useParams } from "react-router";
import { Suspense, useEffect, useState } from "react";
import {
  delivaryTime,
  formatedSoldNumber,
  formatPrice,
} from "../helper/helper";
import Star from "./Star";
import { useDispatch } from "react-redux";
import { updateOrderList } from "../reduxSlicers/appSlicers";
// import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { TiArrowRightThick } from "react-icons/ti";
import { AiOutlineSafety } from "react-icons/ai";
import { FaChevronRight, FaShippingFast } from "react-icons/fa";
import { useRespectiveProduct } from "../services/useProducts";
import Spinner from "./Spinner";

// const product = {
//   id: 1,
//   name: "Elegant Saree ",
//   price: 12.34,
//   rrp: 13.45,
//   image: "../../public/saree.jpg",
//   // reviews: 100,
//   category: "sarees",
//   shortDescription:
//     "A beautiful saree perfect for any occasion. A beautiful saree perfect for any occasion.",
//   rating: 2.2,
//   stock: 5,
//   discount: 20,
//   limitedeal: true,
//   sold: 50,
//   colors: ["red", "blue", "orange", "green"],
//   fastestDelivary: 15,
//   lateDelivary: 20,
//   dealer: "nishant traders",
//   brand: "AUNNO",
//   colour: "Black on Space Gray",
//   input_voltage: "	250 Volts",
//   output_voltage: "250 Volts",
//   plug_type: "Type G",
//   additionalDescription:
//     "Universal Travel Adapter: Simplify your travels with this all in one travel adapter. Equipped with UK, US, AU, and EU plugs, it ensures effortless use in over 200 countries. Compatible with plug types A, B, C, E, F, G, I, J, L, and N Travel Plug Adapter Worldwide with 4 USB Ports: This high power adapter features 2 USB A and 2 USB C ports. The USB slots intelligently detect multiple devices and distribute current dynamically with a maximum total output of 21W Widely Compatible Travel Plug: This power travel adapter is compatible with various electronic devices such as smartphones, MacBooks, digital cameras, Bluetooth speakers, and power banks. The maximum power is up to 2500W (Rated: 100V to 250V)",
// };
function ElectronicPageDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [defaultCountry, setDefaultCountry] = useState("");
  const [imagePosition, setImagePosition] = useState(0);
  const { product } = useRespectiveProduct(productId);

  // const orderList = useSelector((state) => state.app.orderList);
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
  }, []);

  const handleAllCart = (productId) => {
    dispatch(updateOrderList({ productId, quantity }));
    navigate("/products");
  };
  const handleImageChange = (e) => {
    setImagePosition(e.target.dataset.id);
  };
  return (
    <div className="md:mt-25 h-auto flex  md:px-10 md:py-10 ">
      <div className="w-[50%] ">
        <div className="mt-3">
          <div className="flex gap-3 ">
            <div className="flex flex-col gap-4 h-fit">
              {product?.images.map((image, i) => (
                <img
                  src={image}
                  key={image}
                  data-id={i}
                  className="w-[5rem] h-[6rem] cursor-pointer"
                  onClick={(e) => handleImageChange(e)}
                />
              ))}
            </div>

            <img
              src={product?.images[imagePosition]}
              alt={product?.name}
              className={`md:w-[80%] md:h-[80vh] transition-filter duration-500 ${
                isImageLoaded ? "" : "blur-md"
              }`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="flex flex-col gap-[7px]">
          <div className="text-[1.4rem]">{product?.shor_description}</div>
          <div className="md:flex gap-2">
            <p className="text-gray-700">
              {formatedSoldNumber(product?.sold)} Sold |
            </p>
            <p className="cursor-pointer capitalize">
              sold by{" "}
              <span className="text-indigo-100 font-semibold capitalize">
                {product?.dealer}
              </span>
            </p>
          </div>
          <div className=" flex">
            <span className="md:pr-2 md:text-[1.2rem] text-gray-700">
              {product?.rating}
            </span>
            <Star rating={product?.rating} size="1.3rem" />
          </div>
          <div className="relative md:w-20  ">
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
              // onFocus={() => setQuantity(10)}
              // onBlur={() => setQuantity(1)}
            >
              {Array.from({ length: 50 }, (_, i) => (
                <option key={i} value={i + 1} className="cursor-pointer">
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="border-b border-gray-600 md:pb-5">
            <p className="md:font-semibold text-2xl">
              {formatPrice(product?.price)}
            </p>
          </div>
          <div>
            <table className="flex gap-10">
              <thead>
                <tr className="flex flex-col gap-1 items-start capitalize">
                  <th>brand</th>
                  <th>colour</th>
                  <th>input voltage</th>
                  <th>output voltage</th>
                  <th>Plug Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="flex flex-col gap-1 items-start capitalize">
                  <td>: {product?.brand}</td>
                  <td className="flex items-center gap-3">
                    :{" "}
                    {product?.colors?.map((colour) => (
                      <p
                        className="w-4 h-4 rounded-full border border-black cursor-pointer"
                        style={{ backgroundColor: `${colour}` }}
                        key={colour}
                      ></p>
                    ))}
                  </td>
                  <td>: {product?.input_voltage}</td>
                  <td>: {product?.output_voltage}</td>
                  <td>: {product?.plug_type}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <h3 className="capitalize text-[1.5rem] font-semibold mt-5">
                about this items
              </h3>
              <p>{product?.additional_description}</p>
            </div>
          </div>
          <div className="md:w-full md:border-t md:border-gray-700 md:py-3">
            <div className="md:mb-3 text-indigo-500">
              <span className="capitalize ">deliver</span> to {defaultCountry}
              {}
            </div>
            <button
              className="md:w-[80%] float-left md:py-1 md:px-2 rounded-full bg-indigo-500 text-[1.4rem] capitalize text-stone-100 cursor-pointer"
              onClick={() => handleAllCart(product?.id)}
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
