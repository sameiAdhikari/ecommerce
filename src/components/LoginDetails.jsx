import { FaFacebook, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

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
        <FaFacebook className="text-[2.8rem] md:p-1.5 md:mx-2.5 cursor-pointer text-indigo-100 transition-colors duration-100 hover:shadow-md/30 hover:shadow-yellow-400" />
        <FaYoutube className="text-[2.8rem] md:p-1.5 md:mx-2.5 cursor-pointer text-red-600 transition-colors duration-100 hover:shadow-md/30 hover:shadow-yellow-400" />
        <FaTwitter className="text-[2.8rem] md:p-1.5 md:mx-2.5 cursor-pointer text-blue-600 transition-colors duration-100 hover:shadow-md/30 hover:shadow-yellow-400" />
        {/* <FaTiktok className="text-[2.2rem] md:mx-2 cursor-pointer hover:text-indigo-100 transition-colors duration-100" /> */}
        <img
          width="45"
          height="45"
          src="https://img.icons8.com/color/48/tiktok--v1.png"
          alt="tiktok--v1"
          className="cursor-pointer hover:shadow-md/30 hover:shadow-yellow-400"
        />
      </div>
    </div>
  );
}

export default LoginDetails;
