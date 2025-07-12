import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillSafetyCertificate, AiOutlineSafety } from "react-icons/ai";
import { IoIosLock } from "react-icons/io";
import { PiWarningCircleLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router";
import { formatPrice } from "../helper/helper";
import { VAT } from "../constant/constants";
import { minimumPrice } from "../constant/constants";
import {
  updateFinalOrders,
  updatePromoCode,
  updateTotalAmountAfterDiscountAndTax,
} from "../reduxSlicers/appSlicers";

function PaymentSummary({ orders }) {
  const dispatch = useDispatch();
  const promoCode = useSelector((state) => state.app.promoCode);
  const user_id = useSelector((state) => state.app.user_id);
  const [isMinimumPrice, setIsMinimumPrice] = useState(false);
  const navigate = useNavigate();

  const supTotal = orders
    ?.map((order) => order.price * order.quantity)
    .reduce((acc, price) => acc + price, 0);
  const totalDiscount = orders
    ?.map((order) => order.discount * order.quantity)
    .reduce((acc, price) => acc + price, 0);

  const estimatedTax = ((supTotal - totalDiscount) * VAT) / 100;
  const finalPrice = supTotal - totalDiscount + estimatedTax;
  function handleCheckout() {
    if (finalPrice > minimumPrice) {
      dispatch(updateFinalOrders(orders));
      dispatch(updateTotalAmountAfterDiscountAndTax(finalPrice));
      navigate("/checkout");
    } else {
      setIsMinimumPrice(true);
    }
  }

  return (
    <div className="sticky top-30 ">
      <div className=" md:w-full md:h-auto md:pl-3 ">
        <h3 className="capitalize md:text-xl md:font-semibold  md:mb-2.5 bg-yellow-600 md:h-[3rem] w-[100%] text-center pt-2 text-stone-100">
          order summary
        </h3>
        <div className=" md:p-2 border border-gray-300 bg-stone-100 rounded">
          <div>Total Items ({orders?.length ? orders.length : 0})</div>
          <div className="md:w-full flex justify-between text-[0.89rem] text-stone-600 md:my-2 font-semibold">
            <p className="capitalize">subtotal :</p>
            <p className="font-bold text-[1rem] text-stone-900">
              {supTotal ? formatPrice(supTotal) : formatPrice(0)}
            </p>
          </div>
          <div className="md:w-full flex justify-between text-[0.89rem] text-stone-600 md:my-2 font-semibold">
            <p className="capitalize">shipping charge :</p>
            <p className="text-green-500 font-semibold text-[1.2rem]">Free</p>
          </div>
          <div className="md:w-full flex justify-between text-[0.89rem] text-stone-600 md:my-2  font-semibold ">
            <p className="capitalize">discount :</p>
            <p className="font-bold text-[1rem] text-stone-900">
              {totalDiscount ? formatPrice(totalDiscount) : formatPrice(0)}
            </p>
          </div>
          <div className="md:w-full flex justify-between text-[0.89rem] text-stone-600 md:my-2 md:pb-3 font-semibold ">
            <p className="capitalize">Estimated tax :</p>
            <p className="font-bold text-[1rem] text-stone-900">
              {estimatedTax ? formatPrice(estimatedTax) : formatPrice(0)}
            </p>
          </div>
          <div>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => dispatch(updatePromoCode(e.target.value))}
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
            <p className="font-bold">
              {finalPrice ? formatPrice(finalPrice) : formatPrice(0)}
            </p>
          </div>
          <div className="text-gray-600 text-sm md:pb-2">
            {isMinimumPrice && (
              <>
                <span className="text-red-500 font-semibold">
                  Minimum price should be greater than {minimumPrice}
                </span>
                <br />
              </>
            )}
            <span>Please refer to your final actual amount</span>
          </div>
        </div>
        <div className="flex md:my-3 md:m-auto">
          {user_id ? (
            <button
              className="text-[18px] md:py-[8px] md:px-4 md:w-[100%] text-center cursor-pointer cursro-pointer md:bg-indigo-500 text-stone-100 rounded-[10px]"
              onClick={() => handleCheckout()}
            >
              Proceed to checkout
            </button>
          ) : (
            <button
              className="text-[18px] md:py-[8px] md:px-4 md:w-[100%] text-center cursor-pointer cursro-pointer md:bg-green-400 text-stone-100 rounded-[10px]"
              onClick={() => {
                navigate("/account");
              }}
            >
              Login to Checkout
            </button>
          )}
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
