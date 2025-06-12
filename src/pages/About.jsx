import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHandHolding,
  FaHeart,
  FaQuora,
} from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import ValueBox from "../components/ValueBox";

const testimonials = [
  {
    name: "John Doe",
    image: "/people/1.png",
    rating: "⭐⭐⭐⭐⭐",
    feedback:
      "I love shopping at SamJhana Store! The selection is amazing, and the prices are unbeatable. Highly recommend, especially for fashion and electronics. The customer service is also top notch! I had a small issue with my order, and they resolved it quickly.",
  },
  {
    name: "Jane Smith",
    image: "/people/2.png",
    rating: "⭐⭐⭐⭐",
    feedback:
      "SamJhana Store has become my go-to for all my shopping needs. The variety of products is impressive, and I always find what I'm looking for. Plus, the delivery is super fast!",
  },
  {
    name: "Alice Johnson",
    image: "/people/3.png",
    rating: "⭐⭐⭐⭐⭐",
    feedback:
      "I had a great experience shopping at SamJhana Store. The website is easy to navigate, and I love the range of products available. The quality is excellent, and the prices are very reasonable.",
  },
];

const About = () => {
  const brandName = "SamJhana Store";
  return (
    <>
      <section>
        <div className="relative w-full h-[100dvh] ">
          <img
            src="/banner/bg1.jpg"
            alt="about-banner"
            className="absolute top-0 left-0 w-full h-full z-[-2] "
          />
          <div className="absolute top-0 left-0 w-full h-full z-10 p-4 text-lightCyan-100 bg-gray-900/60 flex flex-col justify-center items-center  ">
            <div className="w-[50%] text-center md:mt-[5rem]">
              <h1 className="text-5xl text-center font-bold mb-6 ">
                About {brandName}
              </h1>
              <p className="text-lg  mb-4">
                Welcome to <span className="font-semibold">{brandName}</span>,
                your one-stop destination for all your shopping needs! At Samei,
                we are committed to providing a seamless and enjoyable online
                shopping experience, offering a wide range of high-quality
                products at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------------------------value preposition section---------------------------------------------------- */}
      <section>
        <div className=" md:px-[4rem] md:py-14 text-center bg-gray-300">
          <h1 className="text-[2.5rem] font-semibold">
            Every Moment You Spend Here Matters to Us
          </h1>
          <p className=" md:mt-4 md:max-w-[60%] mx-auto text-[1.2rem]">
            We are dedicated to making your shopping experience as enjoyable and
            memorable as possible. Your satisfaction is our top priority, and we
            strive to exceed your expectations with every visit.
          </p>
          <div className="flex justify-between relative my-[2rem] py-[2rem]">
            <div className="w-full md:w-[23%] md:h-[20rem]">
              <img
                src="/value1.jpg"
                className=" h-full border object-cover border-gray-500 rounded-tl-[50%] rounded-br-[50%]"
              />
            </div>
            <div className="w-full md:w-[23%] md:h-[20rem]">
              <img
                src="/value2.jpg"
                className="w-full h-full object-cover border  rounded-bl-[50%]"
              />
            </div>
            <div className="w-full md:w-[23%] md:h-[20rem]">
              <img
                src="/value3.jpg"
                className="w-full h-full object-cover border rounded-br-[50%] rounded-tl-[2px]"
              />
            </div>
            <div className="w-full md:w-[23%] md:h-[20rem]">
              <img
                src="/family.jpg"
                className=" h-full border border-gray-500 object-cover rounded-tr-[50%] rounded-bl-[50%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------mission and vision section----------------------------------------------- */}
      <section>
        <div className="px-[8rem] md:pt-[4rem] md:pb-[3rem] bg-gray-300">
          <h1 className="text-center text-4xl font-bold mb-[4rem] underline">
            Our Mission and Vision
          </h1>

          <div className="flex justify-space-between items-center ">
            <img src="/vision1.jpg" className="md:w-[50%] md:h-[26rem]" />
            <div className="text-justify md:w-[50%] md:p-[2rem] bg-white md:h-[26rem] ">
              <h1 className="text-[1.6rem] md:pb-[1rem] font-bold">
                Bringing You the Best, Every Day, Everywhere
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Our mission is to make shopping easy, convenient, and accessible
                for everyone. Whether you're looking for the latest fashion
                trends, electronics, home essentials, or unique gifts, Samei has
                something for everyone. <br /> At Samei, we strive to make your
                shopping journey seamless, no matter where you are. Whether
                you're browsing on your phone during a coffee break or at home
                on your laptop, we deliver a curated selection of fashion,
                electronics, home goods, and unique gifts right to your
                fingertips. We believe great products should be just a click
                away, anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="flex justify-space-between items-center">
            <div className="text-justify md:w-[50%] md:p-[2rem] bg-white md:h-[26rem]">
              <h1 className="text-[1.6rem] font-bold mb-4 md:pb-[1rem]">
                The Best of the Best, Just for You
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                We carefully curate our product selection to ensure that we
                offer only the best quality items. Our team works tirelessly to
                bring you the latest and most popular products, all while
                maintaining affordability. <br />
                We understand that your time is valuable, which is why our team
                carefully handpicks each product to ensure it meets the highest
                standards of quality. From the latest trends to everyday
                essentials, we bring you products you’ll love at prices you’ll
                appreciate—because at Samei, we believe everyone deserves access
                to the best without breaking the bank.
              </p>
            </div>
            <img src="/vision2.jpg" className="md:w-[50%] md:h-[26rem]" />
          </div>

          <div className="flex justify-space-between items-center">
            <img src="/vision3.jpg" className="md:w-[50%] md:h-[26rem]" />
            <div className="flex flex-col text-justify w-[50%] md:p-[2rem] bg-white md:h-[26rem]">
              <h1 className="text-[1.6rem] font-bold mb-4 md:pb-[1rem]">
                Find What You Need, Fast and Easy
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                At Samei, we understand that shopping online can sometimes be
                overwhelming, which is why we have designed our website to be
                user friendly and easy to navigate. Our intuitive search and
                filtering options make it simple to find exactly what you're
                looking for. <br />
                Shopping should be simple, not stressful. That’s why we’ve
                designed Samei to be intuitive and user-friendly. Our clean
                interface, smart search features, and precise filters help you
                quickly discover what you’re looking for, whether it’s a
                specific item or a new favorite. With Samei, your perfect find
                is just a few clicks away—no hassle, no frustration, just a
                smooth and satisfying experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------- testimonial sections----------------------------------- */}
      <section>
        <div className=" md:pb-[5rem] md:pt-[3rem] md:min-h-[25rem] bg-gray-300 ">
          <h1 className="text-center text-3xl font-bold mb-[6rem] underline">
            What Our Customers Say
          </h1>
          {/* <div className="relative flex flex-col items-center justify-center "> */}
          {/* <button className="flex items-center justify-center cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 rounded-[5px] text-[1.2rem] md:p-2 md:w-10 md:h-10 bg-stone-100">
              <FaArrowLeft />
            </button> */}

          <div className="w-full md:w-[100%]  relative flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex justify-between relative flex-col md:mx-auto bg-stone-800/50  text-stone-300 md:px-[2rem] md:py-[1rem] md:w-[31%] md:min-h-[18rem] md:max-h-[18rem] rounded-[15px]"
              >
                <RiDoubleQuotesL className="text-4xl absolute left-[2%] top-6" />
                <img
                  src={`${testimonial.image}`}
                  className="md:w-25 md:h-25 absolute top-[-17%] left-[50%] translate-x-[-50%] z-100"
                />

                <p className="md:mt-12 md:mb-4 text-justify">
                  {testimonial.feedback}
                </p>
                <div>
                  <p>{testimonial.rating}</p>
                  <p className="text-2xl">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
          {/* 
            <button className="flex items-center justify-center cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 rounded-[5px] text-[1.2rem] md:p-2 md:w-10 md:h-10 bg-stone-100">
              <FaArrowRight />
            </button> */}
          {/* </div> */}
        </div>
      </section>

      {/* ------------------------------------------company values sections------------------------------------ */}
      <section>
        <div className=" md:px-[4rem] md:pt-[4rem] md:pb-[3.5rem] text-center  bg-gray-400">
          <h1 className="text-[2.5rem] font-semibold mb-6">Our Core Values</h1>
          <p className="md:max-w-[60%] mx-auto text-[1.2rem] mb-8">
            At Samei, we believe in the power of values to shape our business
            and guide our actions. Our core values reflect who we are and what
            we stand for.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ValueBox image={"/core-value1.jpg"} title={"Customer Focus"}>
              We put our customers at the heart of everything we do, striving to
              exceed their expectations and deliver exceptional service.
            </ValueBox>
            <ValueBox image={"/core-value2.jpg"} title={"Integrity"}>
              We conduct our business with honesty and transparency, building
              trust with our customers and partners.
            </ValueBox>
            <ValueBox image={"/core-value3.jpg"} title={"Innovation"}>
              We embrace change and continuously seek new ways to improve our
              products and services.
            </ValueBox>
            <ValueBox image={"/core-value4.jpg"} title={"Sustainability"}>
              We are committed to minimizing our environmental impact and
              promoting sustainable practices in our operations.
            </ValueBox>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
