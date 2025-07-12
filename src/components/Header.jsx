import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart, TiThMenu } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { updateSearch } from "../reduxSlicers/appSlicers";
import List from "./List";
// import supabase from "../lib/supabase";

// const data = [
// ];

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchInputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const orderList = useSelector((state) => state.app.orderList);
  const search = useSelector((state) => state.app.search);
  const activeTab = Number(searchParams.get("activeTab")) || 0;
  const browsingHistory =
    JSON.parse(localStorage.getItem("browsingHistory")) || [];

  const handleCategory = (category, i) => {
    searchParams.set("category", category);
    searchParams.set("activeTab", i);
    setSearchParams(searchParams);
    navigate({ pathname: "/products", search: searchParams.toString() });
    dispatch(updateSearch("")); // Clear search when changing category
    searchInputRef.current?.blur(); // Remove focus from search input
  };

  const handleSearch = (e) => {
    dispatch(updateSearch(e.target.value));
  };
  const handleNavigate = () => {
    if (search.trim() === "") {
      searchInputRef.current?.focus();
      return;
    }
    if (browsingHistory.length > 0) {
      const newHistory = [search, ...browsingHistory];
      localStorage.setItem(
        "browsingHistory",
        JSON.stringify([...new Set(newHistory)])
      );
    } else {
      localStorage.setItem("browsingHistory", JSON.stringify([search]));
    }
    navigate("/products");
  };

  // const handleUpload = async () => {
  //   try {
  //     const returnData = await Promise.all(
  //       data.map(async (product) => {
  //         const { error } = await supabase.from("products").insert([product]);
  //         if (error) throw new Error(error.message);
  //         return data;
  //       })
  //     );
  //     await Promise.all(returnData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 flex justify-between items-center px-[4rem] text-[var(--color-brand-500)] bg-gray-800 h-[5rem] shadow-xl/30 shadow-indigo-700 w-full`}
      >
        {/* <button
          className="fixed top-35 left-0 p-4 rounded-full bg-red-500 z-50 "
          onClick={handleUpload}
        >
          upload
        </button> */}
        <div className="flex align-middle">
          <Link to="/">
            <img
              src="/logo-transparent.png"
              className="h-[3rem] w-[10rem] cursor-pointer"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="md:w-[55%] md:relative">
          <input
            ref={searchInputRef}
            name="search"
            type="text"
            id="search"
            className={`md:w-full border border-gray-300 md:pb-[6px] md:pt-[5px] md:px-5 md:text-[1rem] text-black md:bg-stone-100 outline-none rounded-[5px]`}
            placeholder="Search your best items..."
            value={search}
            onChange={(e) => handleSearch(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNavigate();
              }
            }}
          />
          <FiSearch
            className="md:absolute top-1/2 left-[97%] rounded-tr-[5px] rounded-br-[5px] -translate-y-1/2 md:h-full md:w-[2.5rem] cursor-pointer md:text-2xl md:bg-[var(--color-brand-600)] hover:md:bg-[var(--color-brand-100)] transition-all duration-200"
            onClick={() => handleNavigate()}
          />
        </div>
        <ul className="flex justify-between items-center w-[25%] text-xl font-medium">
          <List linkTo="products" after="true">
            Products
          </List>
          <List linkTo="about" after="true">
            About
          </List>
          <List linkTo="contact" after="true">
            Contact
          </List>
          <Link
            to="cart"
            className="text-3xl hover:text-indigo-500 duration-300"
          >
            <TiShoppingCart />
          </Link>
          <form>
            <Link
              to="account"
              className="text-2xl hover:text-indigo-500 duration-300"
            >
              <VscAccount />
            </Link>
          </form>
          {/* </div> */}
        </ul>
      </div>
      <section>
        <div
          className={`fixed top-[5rem] left-0 z-99999 md:flex md:items-center ${
            orderList.length > 0 && location.pathname === "/products"
              ? "w-[86%]"
              : "w-full"
          }  md:gap-6 capitalize  md:h-[2.7rem] bg-gray-700 md:text-stone-50 font-semibold`}
        >
          <button
            className={`flex items-center gap-1 font-semibold cursor-pointer md:border ${
              activeTab === 0 ? "border-stone-100" : "md:border-transparent"
            } hover:border-stone-100 md:py-[6px] md:px-3 rounded-[2px] md:ml-5`}
            onClick={() => handleCategory("all", 0)}
          >
            <TiThMenu className="md:text-2xl cursor-pointer" />
            <span> All</span>
          </button>
          <div className="flex gap-1 md:flex md:gap-5">
            {[
              { label: "home appliance", categoryValue: "home appliance" },
              {
                label: "beauty & personal care",
                categoryValue: "beauty & personal care",
              },
              { label: "electronics", categoryValue: "electronics" },
              { label: "sports", categoryValue: "sports" },
              { label: "fashion", categoryValue: "fashion" },
              { label: "books", categoryValue: "books" },
              { label: "shoes", categoryValue: "shoes" },
              { label: "toys and games", categoryValue: "toys and games" },

              "shoes",
              "toys and games",
            ].map((categoryList, i) => (
              <button
                key={i + 50}
                onClick={() =>
                  handleCategory(categoryList.categoryValue, i + 1)
                }
                className={`md:border ${
                  activeTab === i + 1
                    ? "border-stone-100"
                    : "border-transparent"
                } hover:border-stone-100 md:py-[6px] md:px-3 rounded-[2px] capitalize cursor-pointer`}
              >
                {categoryList.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

// const newdata = {
//   title,
//   price,
//   rrp,
//   discount,
//   descriptions,
//   short_description,
//   ratings,
//   reviews,
//   stock,
//   sold,
//   category,
//   brand,
//   dealer,
//   fastest_delivery,
//   late_delivery,
//   colors,
//   limited_deal,
//   images,
//   additional_description,
//   sub_category,
//   currency,
//   tags,
//   sizes,
//   specification,
// };
