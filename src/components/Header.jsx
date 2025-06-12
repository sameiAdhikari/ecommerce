import { TiShoppingCart } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { Form, Link } from "react-router-dom";
import List from "./List";

function Header() {
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
      <ul className="flex justify-between items-center  w-[37%] text-xl font-medium">
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
