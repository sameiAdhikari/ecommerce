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
    { name: "Sponsor One", logo: "/paypal-3.svg", link: "#" },
    { name: "Sponsor Two", logo: "/coca-cola-2021.svg", link: "#" },
    { name: "Sponsor Three", logo: "/tesla-pure.svg", link: "#" },
    { name: "Sponsor Four", logo: "/facebook.svg", link: "#" },
  ];
  return (
    <>
      <div className="w-full bg-gray-800 pt-2 pb-4 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-5 text-stone-100">
            Supported by the worldwide Sponsors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center pb-3">
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
                  className="h-6 mx-auto transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer className="text-gray-400 bg-gray-900 pb-5 ">
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
              <div className="my-1 text-[17px] ">
                <List linkTo="*" newWindow={true}>
                  Coupons
                </List>
              </div>
              <div className="my-1 text-[17px] ">
                <List linkTo="/blogpost" newWindow={true}>
                  Blog Post
                </List>
              </div>
              <div className="my-1 text-[17px] ">
                <List linkTo="/returnpolicy" newWindow={true}>
                  Return Policy
                </List>
              </div>
              <div className="my-1 text-[17px] ">
                <List linkTo="/joinaffiliate" newWindow={true}>
                  Join Affiliate
                </List>
              </div>
            </ul>
          </div>

          <div className="w-[20%] text-center">
            <h4 className="text-xl font-medium text-stone-50">Follow Us</h4>
            <ul className="text-sm pl-20">
              <List
                linkTo="https://www.facebook.com/nishant.khadka.9237/"
                newWindow={true}
              >
                <div className="flex align-middle py-1 text-[17px]">
                  <FaFacebook className="text-xl mr-2" />
                  Facebook
                </div>
              </List>
              <List linkTo="https://x.com/NishantKha52217" newWindow={true}>
                <div className="flex  align-middle py-1 text-[17px]">
                  <FaTwitter className="text-xl mr-2" /> Twitter
                </div>
              </List>
              <List
                linkTo="https://www.instagram.com/nishantkhadka111/"
                newWindow={true}
              >
                <div className="flex  align-middle py-1 text-[17px]">
                  <FaInstagram className="text-xl mr-2" /> Instagram
                </div>
              </List>
              <List
                linkTo="https://www.youtube.com/watch?v=2YqrkCI9_wM&list=RD2YqrkCI9_wM&start_radio=1"
                newWindow={true}
              >
                <div className="flex  align-middle py-1 text-[17px]">
                  <FaYoutube className="text-xl mr-2" /> Youtube
                </div>
              </List>
            </ul>
          </div>
        </div>
        {/* -------------------------------footer copyrites----------------------------------- */}
        <p className="text-xl text-center text-gray-500 pb-3">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
