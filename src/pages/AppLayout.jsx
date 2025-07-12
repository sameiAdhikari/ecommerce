import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import CheckoutSidebar from "../components/CheckoutSidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import { getUser } from "../lib/dataService";
import supabase from "../lib/supabase";
import {
  updateCurrentSession,
  updateOrderList,
  updateSelectItems,
  updateUserId,
} from "../reduxSlicers/appSlicers";

function AppLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const location = useLocation();
  const orderList = useSelector((state) => state.app.orderList);
  useEffect(() => {
    async function getUserSession() {
      const session = await supabase.auth.getSession();
      const data = await getUser();
      dispatch(updateCurrentSession(session.data.session));

      if (!data) return;
      dispatch(updateUserId(data.user.id));
      navigate("/");
    }
    getUserSession();
    const isOrderListStored = JSON.parse(localStorage.getItem("orderList"));
    if (isOrderListStored) {
      isOrderListStored.map((item) => {
        dispatch(updateOrderList(item));
      });
    }

    const allIds = orderList.map((order) => order.productId);
    dispatch(updateSelectItems(allIds));
  }, [dispatch, orderList, location, navigate]);
  return (
    <div className="flex">
      <div
        // this is for the width of the main content area which will be shown only in the products page
        className={
          orderList.length > 0 && location.pathname === "/products"
            ? "w-[86%]"
            : ""
        }
      >
        <Header />
        <Suspense fallback={<Spinner />}>
          <main className="w-[100%]">
            <Outlet />
          </main>
        </Suspense>
        <Footer />
      </div>
      {orderList.length > 0 && location.pathname === "/products" && (
        <CheckoutSidebar />
      )}
    </div>
  );
}

export default AppLayout;
