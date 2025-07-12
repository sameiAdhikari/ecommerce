import { FaFacebook, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

function LoginDetails() {
  return (
    <div className="md:w-[45%] flex flex-col items-start md:my-3">
      <h1 className="md:text-[2.2rem] md:mb-3 font-bold ">
        Log in to Discover New Arrivals & Exclusive Offers
      </h1>
      <p className="md:text-[1.2rem] leading-6 md:my-5">
        Secure access to your orders, wishlist, and personalized
        recommendations. Stay up to date with the latest deals, track your
        deliveries in real-time, and manage your account with ease.
      </p>
      <div className="flex items-center md:mt-3">
        <Link
          to="https://www.facebook.com/nishant.khadka.9237/"
          target="_blank"
        >
          <FaFacebook className="text-[2.8rem] md:p-1.5 md:mx-2.5 cursor-pointer text-indigo-100 transition-colors duration-100 border-1 hover:border-stone-900" />
        </Link>
        <Link
          to={
            "https://www.youtube.com/watch?v=2YqrkCI9_wM&list=RD2YqrkCI9_wM&start_radio=1"
          }
          target="_blank"
        >
          <FaYoutube className="text-[2.8rem] md:p-1.5 md:mx-2.5 cursor-pointer text-red-600 transition-colors duration-100  border-1 hover:border-stone-900" />
        </Link>
        <Link to={"https://x.com/NishantKha52217"} target="_blank">
          <FaTwitter className="text-[2.8rem] md:p-1.5 md:mx-2.5 cursor-pointer text-blue-600 transition-colors duration-100 border-1 hover:border-stone-900 " />
        </Link>
        <Link to="https://www.tiktok.com/" target="_blank">
          <img
            width="45"
            height="45"
            src="https://img.icons8.com/color/48/tiktok--v1.png"
            alt="tiktok--v1"
            className="cursor-pointer border-1 hover:border-stone-900"
          />
        </Link>
      </div>
    </div>
  );
}

export default LoginDetails;
