import { useEffect, useState } from "react";
import { CiMap } from "react-icons/ci";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Map from "../components/Map";
import Spinner from "./Spinner";
import SpinnerMini from "./SpinnerMini";
function LocationAddress() {
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [officeLocations, setOfficeLocations] = useState("");
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    async function fetchLocaton() {
      if (!officeLocations) return;
      setIsLoading(true);
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${officeLocations}&key=${apiKey}`
      );
      if (!response.ok) throw new Error("Failed to fetch location data");
      const data = await response.json();
      setLocation(data.results[0].geometry.location);
      setIsLoading(false);
    }
    fetchLocaton();
  }, [officeLocations, apiKey]);
  return (
    <div className="bg-gray-300">
      <div className="w-[85%] md:h-[40rem] flex justify-center items-center md:m-auto md:py-10 ">
        <div className="md:w-[40%] md:h-full flex flex-col justify-center items-start">
          <p className="uppercase md:text-xl ">get in touch</p>
          <p className="md:text-[1.7rem] font-bold md:leading-7 md:my-6">
            Visit one of our agency locations or contact us today
          </p>
          <p className="capitalize font-semibold md:text-xl">head office</p>
          <div>
            <div className="flex items-center gap-2 my-[0.6rem]">
              <CiMap className="inline-block mr-2 text-2xl " />
              <p className="text-lg">Triq Turu Rizzo Il-Gżira GZR, Malta</p>
            </div>
            <div className="flex items-center gap-2 my-[0.6rem]">
              <FiPhoneCall className="inline-block mr-2 text-xl" />
              <p className="text-lg">Phone: (+356) 99111070</p>
            </div>
            <div className="flex items-center gap-2 my-[0.6rem]">
              <MdOutlineMarkEmailUnread className="inline-block mr-2 text-xl" />
              <p className="text-lg">Email: khadkan73@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 my-[0.6rem]">
              <FiClock className="inline-block mr-2 text-xl" />
              <p className="text-lg">Monday to Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="relative md:w-[60%] md:h-full mx-auto z-40">
          <select
            value={officeLocations}
            onChange={(e) => setOfficeLocations(e.target.value)}
            className="absolute top-4 right-2 z-999 w-[13rem] h-10 md:mr-2 md:mb-6 p-2 bg-amber-50 border-2 cursor-pointer border-gray-900 rounded float-end"
          >
            <option value="kathmandu">Select branch location</option>
            <option value="gaighat">Gaighat</option>
            <option value="dharan">Dharan</option>
            <option value="jhapa">Jhapa</option>
            <option value="biratnagar">Biratnagar</option>
          </select>
          {isLoading ? <SpinnerMini /> : <Map location={location} />}
        </div>
      </div>
    </div>
  );
}

export default LocationAddress;
