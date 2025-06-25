import { useState } from "react";
import { AiFillSafetyCertificate, AiOutlineSafety } from "react-icons/ai";
import { IoIosLock } from "react-icons/io";
import { PiWarningCircleLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router";

function PaymentSummary({ orders }) {
  const [promocode, setPromocode] = useState("");
  const navigate = useNavigate();
  const finalPrice = 9000;
  console.log(orders);
  function handleCheckout() {
    if (finalPrice >= 100) {
      navigate("/checkout");
    } else {
      alert("final price is less than 100");
    }
  }
  return (
    <div className="sticky top-30 ">
      <div className=" md:w-full md:h-auto md:px-3 ">
        <h3 className="capitalize md:text-xl md:font-semibold  md:mb-2.5 bg-yellow-600 md:h-[3rem] w-[100%] text-center pt-2 text-stone-100">
          order summary
        </h3>
        <div className=" md:p-2 border border-gray-300 bg-stone-100 rounded">
          <div>Total Items ({orders?.length ? orders.length : 0})</div>
          <div className="md:w-full flex justify-between text-[0.89rem] text-stone-600 md:my-2 font-semibold">
            <p className="capitalize">subtotal :</p>
            <p>$9000.00</p>
          </div>
          <div className="md:w-full flex justify-between text-[0.89rem] text-stone-600 md:my-2 font-semibold">
            <p className="capitalize">shipping charge :</p>
            <p>$90.00</p>
          </div>
          <div className="md:w-full flex justify-between text-[0.89rem] text-stone-600 md:my-2  font-semibold ">
            <p className="capitalize">discount :</p>
            <p>$10.00</p>
          </div>
          <div className="md:w-full flex justify-between text-[0.89rem] text-stone-600 md:my-2 md:pb-3 font-semibold ">
            <p className="capitalize">Estimated tax :</p>
            <p>$00.00</p>
          </div>
          <div>
            {/* <p>do you have a promo code?</p> */}
            <input
              type="text"
              value={promocode}
              onChange={(e) => setPromocode(e.target.value)}
              id="promo"
              name="promo"
              className="md:w-full md:px-3 md:py-2 md:bg-white outline-none rounded "
              placeholder="Enter your promo code..."
            />
          </div>
          <div className="flex float-end md:my-3">
            <button className="text-[18px] md:py-[8px] md:px-4 md:w-[100%] cursor-pointer cursro-pointer md:bg-indigo-500 text-stone-100 rounded-[10px]">
              Apply now
            </button>
          </div>
          <div className="md:w-full flex justify-between text-[1.1rem]  md:my-2 font-semibold border-t-2 md:pt-2">
            <p className="capitalize">total :</p>
            <p>${finalPrice}</p>
          </div>
          <div className="text-gray-600 text-sm md:pb-2">
            <span>Please refer to your final actual amount</span>
          </div>
        </div>
        <div className="flex md:my-3 md:m-auto">
          <button
            className="text-[18px] md:py-[8px] md:px-4 md:w-[100%] text-center cursor-pointer cursro-pointer md:bg-indigo-500 text-stone-100 rounded-[10px]"
            onClick={() => handleCheckout()}
          >
            Proceed to checkout
          </button>
        </div>
        <div className="flex items-center text-[12px] text-gray-600 text-justify">
          <PiWarningCircleLight className="md:text-[1.5rem] md:mr-1" />
          <p>
            Item availability and the pricing are not guaranteed untill final
            payment is done!
          </p>
        </div>
        <div className="capitalize flex items-center md:pt-4">
          {/* <AiOutlineSafety /> */}
          <IoIosLock className="text-green-500 text-xl md:mr-2" />
          <p>safe payment options</p>
        </div>

        <div className="text-sm text-green-600">
          we are committed to protecting your payment informations
        </div>
        <div className="text-sm text-gray-600">
          We follow PCI DSS standards, use strong encryption, and perform
          regular reviews of its system to protect your privacy.
        </div>
        <div className=" md:my-3">
          <p>1. payment methods</p>
          <img src="/pay/payment.png"></img>
        </div>
        <div className="capitalize flex items-center md:pt-3">
          {/* <AiOutlineSafety className="text-green-500 text-xl md:mr-2" /> */}
          <AiFillSafetyCertificate className="text-green-500 text-xl md:mr-2" />
          <p>secure privacy</p>
        </div>
        <div className=" text-sm text-gray-600 ">
          Protecting your privacy is important to us! Please be assured that
          your information will be kept secured and uncompromised. We will only
          use your information in accordance with our privacy policy to provide
          and improve our services to you.
        </div>
        <div className="text-md text-gray-600 md:py-1">
          <Link to="/privayPolicy">learn more {`>`} </Link>
        </div>
        <div className="capitalize flex items-center md:pt-3">
          <AiOutlineSafety className="text-green-500 text-xl md:mr-2" />
          <p>we purchase protection</p>
        </div>
        <div className="text-sm text-gray-600">
          Shop confidently on Temu knowing that if something goes wrong, we've
          always got your back.
        </div>
      </div>
    </div>
  );
}

export default PaymentSummary;
