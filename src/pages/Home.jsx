import { FaHeadset, FaShippingFast } from "react-icons/fa";
import ProductList from "../components/ProductList";
import LandingPage from "../components/LandingPage";
import NewsLetter from "../components/NewsLetter";
// import ProductList from "../components/ProductList";
import PromotionProduct from "../components/PromotionProduct";
import { RiRefund2Fill } from "react-icons/ri";
import { PiContactlessPaymentDuotone } from "react-icons/pi";

const images = ["/banner/b4.jpg", "/banner/b10.jpg", "/saree.jpg"]; // Add more images as needed

const products = [
  {
    id: 1,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
    discount: 20,
  },
  {
    id: 2,
    name: "Elegant Saree",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
    discount: 10,
  },
  {
    id: 3,
    name: "Elegant Saree",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
    discount: 5,
  },
  {
    id: 4,
    name: "Elegant Saree",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
    discount: 30,
  },
  {
    id: 5,
    name: "Elegant Saree",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
  },
  {
    id: 6,
    name: "Elegant Saree",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    calegory: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
  },
];

const Home = () => {
  return (
    <>
      <LandingPage />

      {/*-------------------------------------- New Arrivals Section ---------------------------------*/}

      <section className="text-center md:my-[5rem] ">
        <div className="relative  mx-10 ">
          <h1 className=" text-4xl capitalize  md:mb-2">
            {" "}
            new arriavals / summer collections
          </h1>
          <p className="text-3xl capitalize text-gray-600 md:mb-[3rem]">
            summer wear
          </p>
          <div className="relative">
            <img
              src={images[0]}
              alt="image0"
              className="w-full h-[50rem] object-cover blur-[3px] "
            />
          </div>
          <div>
            <img
              src={images[1]}
              alt="image1"
              className="absolute w-80 h-80 top-[50%] left-[22%] md:rounded-tl-[7rem] md:rounded-br-[7rem] "
            />
          </div>
          <div className="">
            <img
              src={images[2]}
              alt="image2"
              className="absolute w-80 h-80 top-[30%] left-[45%] "
            />
          </div>
          <div className="md:absolute md:top-70 md:left-[60%]  md:w-20 md:h-20 rounded-full bg-indigo-400 z-10 flex items-center justify-center md:text-2xl">
            $333
          </div>
          <div>
            <img
              src={images[0]}
              alt="image0"
              className="absolute  w-80 h-80 top-[50%] left-[68%] md:rounded-tr-[7rem] md:rounded-bl-[7rem]  "
            />
          </div>
        </div>
      </section>

      {/* --------------------------------Summer collections products------------------------------ */}

      <section className="md:px-[5rem] md:w-full md:my-10  ">
        <div className=" md:text-center capitalize">
          <p className="md:text-4xl font-bold">our latest collections</p>
          <p className="md:text-xl text-gray-500 md:my-5">
            Have a look our latest summer collections, we value your time and
            money!
          </p>
        </div>
        <div className=" flex flex-wrap justify-center ">
          {products.map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </div>
        {/* Add more product cards as needed */}
      </section>

      {/* ---------------------------------news letters section------------------------------ */}
      <NewsLetter />

      {/* ---------------------------------some recommended items------------------------------ */}
      <section className="md:px-[0rem] md:py-[2rem] md:w-full md:my-10  md:bg-gray-300">
        <div className=" md:text-center capitalize">
          <p className="md:text-4xl font-bold">some recommended items</p>
          <p className="md:text-xl text-gray-500 md:my-5">
            Have a look our latest summer collections, we value your time and
            money!
          </p>
        </div>
        <div className=" flex flex-wrap justify-center ">
          {products.map((product) => (
            <PromotionProduct key={product.id} product={product} />
          ))}
        </div>
        {/* Add more product cards as needed */}
      </section>
    </>
  );
};
export default Home;
