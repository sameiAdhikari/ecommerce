import { TiShoppingCart } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { Form, Link } from "react-router-dom";
import List from "./List";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Header() {
  const [search, setSearch] = useState("");
  return (
    <div className="fixed top-0 left-0 z-9999 flex justify-between items-center px-[4rem] bg-gray-200 h-[4rem]  shadow-xl/30 shadow-indigo-700 w-[100%]">
      <div className="flex align-middle">
        <Link to="/">
          <img
            src="/logo-transparent.png"
            className="h-[3rem] w-[10rem] cursor-pointer"
          />
        </Link>
      </div>
      {/* <div className="md:w-[48%] md:relative">
        <input
          type="text"
          className="md:w-[100%] border border-gray-300 md:pb-[6px] md:pt-[5px] md:px-5 md:text-[1rem] md:bg-stone-100 outline-none rounded-full"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FiSearch className="md:absolute top-[50%] right-[1%] translate-[-50%] cursor-pointer md:text-2xl" />
      </div> */}
      <ul className="flex justify-between items-center  w-[35%] text-xl font-medium">
        <List linkTo="/" after="true">
          Home
        </List>
        <List linkTo="products" after="true">
          Products
        </List>
        <List linkTo="about" after="true">
          About
        </List>
        <List linkTo="contact" after="true">
          Contact
        </List>
        <div className="flex justify-between w-[4.5rem]">
          <Link to="cart" className="text-3xl">
            <TiShoppingCart />
          </Link>
          <form>
            <Link to="account" className="text-2xl">
              <VscAccount />
            </Link>
          </form>
        </div>
      </ul>
    </div>
  );
}

export default Header;
