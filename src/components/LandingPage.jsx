import { Link, useNavigate } from "react-router";
import { usePromotions } from "../services/useProducts";

function LandingPage() {
  const navigate = useNavigate();
  const { promotions } = usePromotions();
  return (
    <section className="relative top-[7rem] flex flex-col md:flex-row justify-between bg-gradient-to-r from-indigo-50 to-indigo-200 md:mb-[7rem] md:p-16 h-[84vh] overflow-hidden">
      {/* Left Content */}
      <div className="z-10 max-w-lg md:mt-20 md:pl-15 text-center md:text-left  ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Elevate Your Style with Our Latest Collection!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover our latest collection blending comfort and elegance. Shop now
          and upgrade your wardrobe!
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            to="/contact"
            className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 cursor-pointer transition"
          >
            Contact Us
          </Link>
          <button
            className="px-6 py-3 cursor-pointer bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-900 transition"
            onClick={() => navigate(`/products/${promotions?.[0].id}`)}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Right Image with Soft Background */}
      <div className="relative w-[35%]">
        {/* Blurred Shape Behind Image */}
        <div className="absolute  inset-0 bg-indigo-400 rounded-full blur-3xl opacity-50 z-0"></div>

        {/* Main Image */}
        <img
          src={promotions?.[0].images?.[0]} // Replace with your image path
          alt="Model"
          // className="relative right-10 md:bottom-20 z-10 w-72 md:w-130  object-contain"
          className=" relative right-5 bottom-0 w-full h-[110%]"
        />
      </div>
    </section>
  );
}

export default LandingPage;
