import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutSidebar from "../components/CheckoutSidebar";
import { useSelector } from "react-redux";

function AppLayout() {
  // const isOrderList = false;
  const orderList = useSelector((state) => state.app.orderList);
  return (
    <div className="flex">
      <div className={orderList.length > 0 ? "w-[88%]" : ""}>
        <Header />
        <main className="w-[100%]">
          <Outlet />
        </main>
        <Footer />
      </div>
      {orderList.length > 0 && <CheckoutSidebar />}
    </div>
  );
}

export default AppLayout;
