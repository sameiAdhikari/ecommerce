import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart, TiThMenu } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { updateSearch } from "../reduxSlicers/appSlicers";
import List from "./List";

function Header() {
  // const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const orderList = useSelector((state) => state.app.orderList);
  const search = useSelector((state) => state.app.search);

  const handleCategory = (category) => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
    navigate({ pathname: "/products", search: searchParams.toString() });
    dispatch(updateSearch("")); // Clear search when changing category
    searchInputRef.current?.blur(); // Remove focus from search input
  };

  const handleSearch = (value) => {
    dispatch(updateSearch(value));
    // navigate("/products");
  };
  const handleNavigate = () => {
    if (search.trim() === "") {
      searchInputRef.current?.focus();
      return;
    }
    navigate("/products");
  };

  // const handleUpload = async () => {
  //   try {
  //     const returnData = data.map(async (product) => {
  //       // const newdata = {
  //       //   title: product.title,
  //       //   price: product.price,
  //       //   rrp: product.rrp,
  //       //   discount: product.discount,
  //       //   voucher_discount: product.voucher_discount,
  //       //   description: product.description,
  //       //   short_description: product.short_description,
  //       //   rating: product.rating,
  //       //   reviews: product.reviews,
  //       //   stock: product.stock,
  //       //   sold: product.sold,
  //       //   category: product.category,
  //       //   brand: product.brand,
  //       //   dealer: product.dealer,
  //       //   limited_deal: product.limited_deal,
  //       //   fastest_delivery: product.fastest_delivery,
  //       //   late_delivery: product.late_delivery,
  //       //   colors: product.colors,
  //       //   input_voltage: product.input_voltage,
  //       //   output_voltage: product.output_voltage,
  //       //   plug_type: product.plug_type,
  //       //   images: product.images,
  //       //   additional_description: product.additional_description,
  //       // };

  //       const { data, error } = await supabase
  //         .from("products")
  //         .insert([product])
  //         .select();
  //       if (error) throw new Error("couldnot insert the data");
  //       console.log(data);
  //       return data;
  //     });
  //     const results = await Promise.all(returnData);
  //     // console.log(results);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-20 flex justify-between items-center px-[4rem] text-[var(--color-brand-500)] bg-gray-800 h-[5rem] shadow-xl/30 shadow-indigo-700 w-full`}
      >
        <button
          className="fixed top-35 left-0 p-4 rounded-full bg-red-500 z-50 "
          // onClick={handleUpload}
        >
          upload
        </button>
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
            placeholder="Search by name..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
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
          {/* <List linkTo="/" after="true">
            Home
          </List> */}
          <List linkTo="products" after="true">
            Products
          </List>
          <List linkTo="about" after="true">
            About
          </List>
          <List linkTo="contact" after="true">
            Contact
          </List>
          {/* <div className="flex justify-between w-[4.5rem]"> */}
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
            orderList.length > 0 ? "w-[88%]" : "w-full"
          }  md:gap-6 capitalize  md:h-[2.7rem] bg-gray-700 md:text-stone-50 font-semibold`}
        >
          <button className="flex items-center gap-1 font-semibold cursor-pointer md:border md:border-transparent hover:border-stone-100 md:py-[6px] md:px-3 rounded-[2px] md:ml-5">
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
            ].map((categoryList) => (
              <button
                key={categoryList.categoryValue}
                onClick={() => handleCategory(categoryList.categoryValue)}
                className="md:border md:border-transparent hover:border-stone-100 md:py-[6px] md:px-3 rounded-[2px] capitalize cursor-pointer"
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
