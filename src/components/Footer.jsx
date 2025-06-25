import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import List from "./List";

function Footer() {
  const sponsors = [
    { name: "Sponsor One", logo: "/paypal.webp", link: "#" },
    { name: "Sponsor Two", logo: "/coke.png", link: "#" },
    { name: "Sponsor Three", logo: "/waiwai.png", link: "#" },
    { name: "Sponsor Four", logo: "/facebook.webp", link: "#" },
  ];
  return (
    <>
      {/* <div className="md:py-[4rem]">
        <p className="text-center text-[1.3rem] md:pb-5 ">
          Supported by the worldwide company
        </p>
        <div className="w-full flex justify-center">
          <img src="/paypal.webp" className="w-[200px] h-[110px] mx-3" />
          <img src="/coke.png" className="w-[200px] h-[110px] mx-3" />
          <img src="/waiwai.png" className="w-[200px] h-[110px] mx-3" />
          <img src="/youtube.webp" className="w-[200px] h-[110px] mx-3" />
          <img src="/facebook.webp" className="w-[200px] h-[110px] mx-3" />
        </div>
      </div> */}
      <div className="w-full bg-gray-100 py-8 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Supported by the worldwide Sponsors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 mx-auto hover:scale-105 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer className="text-gray-400 bg-gray-800 pb-5 ">
        {/* <footer className="grid grid-cols-[1fr_1fr_1fr_1fr] w-full h-[15rem] bg-gray-700"> */}
        <div className="flex justify-between px-[8rem] align-middle w-full py-8  ">
          <div className="flex flex-col justify-between w-[29%]">
            <p className="text-xl text-stone-50 font-medium">
              Download Our App
            </p>
            <p className="mt-6 text-xl mb-2">
              Download App for android and ios mobile phone.
            </p>
            <div className="flex justify-between align-middle my-3p h-[3.5rem]">
              <div className="flex justify-center align-middle w-[49%] p-2 text-center bg-amber-50 rounded-md text-stone-900 cursor-pointer hover:bg-indigo-200 transition-colors duration-400">
                <FaGooglePlay className="text-2xl mt-2.5 mr-2 " />
                <div className="font-bold leading-4">
                  <span className="uppercase text-[10px] "> get it on</span>
                  <p>Google Play </p>
                </div>
              </div>
              <div className="flex justify-center align-middle w-[50%] p-2 text-center bg-amber-50 rounded-md text-stone-900 cursor-pointer hover:bg-indigo-200 duration-400 ">
                <FaApple className="text-3xl mt-2 mr-2 " />
                <div className="font-bold leading-4">
                  <span className="uppercase text-[10px] ">download on</span>
                  <p>App Store </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30%] flex justify-between flex-col  text-center">
            <img src="/logo-transparent.png" className="w-[200px] mx-auto " />
            <p>
              our purpose is to sustainably make the pleasure and benefits of
              products accessible to everyone:)
            </p>
          </div>

          <div className="w-[10%] text-center">
            <h4 className="text-xl text-stone-50 font-medium">Useful Links</h4>
            <ul className="text-sm ">
              <div className="my-1 text-[17px]">
                <List linkTo="*">Coupons</List>
              </div>
              <div className="my-1 text-[17px]">
                <List linkTo="*">Blog Post</List>
              </div>
              <div className="my-1 text-[17px]">
                <List linkTo="*">Return Policy</List>
              </div>
              <div className="my-1 text-[17px]">
                <List linkTo="*">Join Affiliate</List>
              </div>
            </ul>
          </div>

          <div className="w-[20%] text-center">
            <h4 className="text-xl font-medium text-stone-50">Follow Us</h4>
            <ul className="text-sm pl-20">
              <List linkTo="*">
                <div className="flex align-middle py-1 text-[17px]">
                  <FaFacebook className="text-xl mr-2" />
                  Facebook
                </div>
              </List>
              <List linkTo="*">
                <div className="flex  align-middle py-1 text-[17px]">
                  <FaTwitter className="text-xl mr-2" /> Twitter
                </div>
              </List>
              <List linkTo="*">
                <div className="flex  align-middle py-1 text-[17px]">
                  <FaInstagram className="text-xl mr-2" /> Instagram
                </div>
              </List>
              <List linkTo="*">
                <div className="flex  align-middle py-1 text-[17px]">
                  <FaYoutube className="text-xl mr-2" /> Youtube
                </div>
              </List>
            </ul>
          </div>
        </div>
        {/* -------------------------------footer copyrites----------------------------------- */}
        <p className="text-xl text-center text-gray-500 py-5">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
