// {
//   "_id": "fa8e22d6-c0b6-5229-bb9e-ad52eda39a0a",
//   "actual_price": "2,999",
//   "average_rating": "3.9",
//   "brand": "York",
//   "category": "Clothing and Accessories",
//   "crawled_at": "02/10/2021, 20:11:51",
//   "shortDescription": "Yorker trackpants made from 100% rich combed cotton giving it a rich look.Designed for Comfort,Skin friendly fabric,itch-free waistband & great for all year round use Proudly made in India",
//   "discount": "69% off",
//   "images": [
//       "https://rukminim1.flixcart.com/image/128/128/jr3t5e80/track-pant/z/y/n/m-1005combo2-yorker-original-imafczg3xfh5qqd4.jpeg?q=70",
//       "https://rukminim1.flixcart.com/image/128/128/jr58l8w0/track-pant/w/d/a/l-1005combo8-yorker-original-imafczg3pgtxgraq.jpeg?q=70"
//   ],
//   "out_of_stock": false,
//   "pid": "TKPFCZ9EA7H5FYZH",
//   "product_details": [
//       {
//           "Style Code": "1005COMBO2"
//       },
//       {
//           "Closure": "Elastic"
//       },
//       {
//           "Pockets": "Side Pockets"
//       },
//       {
//           "Fabric": "Cotton Blend"
//       },
//       {
//           "Pattern": "Solid"
//       },
//       {
//           "Color": "Multicolor"
//       }
//   ],
//   "seller": "Shyam Enterprises",
//   "selling_price": "921",
//   "sub_category": "Bottomwear",
//   "title": "Solid Men Multicolor Track Pants",
//   "url": "https://www.flipkart.com/yorker-solid-men-multicolor-track-pants/p/itmd2c76aadce459?pid=TKPFCZ9EA7H5FYZH&lid=LSTTKPFCZ9EA7H5FYZHVYXWP0&marketplace=FLIPKART&srno=b_1_1&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EA7H5FYZH.SEARCH&ssid=utkd4t3gb40000001612415717799"
// }

import ProductSidebar from "../components/ProductSidebar";
import SingleProduct from "../components/SingleProduct";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSearch } from "../reduxSlicers/appSlicers";
import { TiThMenu } from "react-icons/ti";

const products = [
  {
    id: 1,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    // reviews: 100,
    category: "sarees",
    shortDescription:
      "A beautiful saree perfect for any occasion. A beautiful saree perfect for any occasion.",
    rating: 2.2,
    stock: 5,
    discount: 20,
    limitedeal: true,
    sold: 50,
    colors: ["red", "blue", "orange", "green"],
    fastestDelivary: 15,
    lateDelivary: 20,
  },
  {
    id: 2,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    // reviews: 100,
    category: "sarees",
    shortDescription:
      "A beautiful saree perfect for any occasion.A beautiful saree perfect for any occasion.",
    rating: 3.2,
    sold: 80878945,
    stock: 5,
    discount: 15,
  },
  {
    id: 3,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    category: "sarees",
    shortDescription:
      "A beautiful saree perfect for any occasion. hjkjkk kjhkj kjk lkhgkj kjhk jhjh kjhkjh kjhkjh",
    rating: 4.2,
    stock: 5,
    discount: 5,
    voucherDiscount: 15,
    sold: 1054548,
    colors: ["red", "blue", "orange", "green"],
    limitedeal: true,
    fastestDelivary: 20,
    lateDelivary: 20,
  },
  {
    id: 4,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    // reviews: 100,
    category: "sarees",
    shortDescription:
      "A beautiful saree perfect for any occasion.A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
    sold: 20546548,

    discount: 10,
  },
  {
    id: 5,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    // brand: "adidas",
    reviews: 100,
    category: "sarees",
    shortDescription: "A beautiful saree perfect for any occasion.",
    rating: 5.2,
    stock: 5,
    voucherDiscount: 10,
    // discount: 20,
    sold: 451525,
    limitedeal: true,
    fastestDelivary: 18,
    lateDelivary: 20,
  },
];

function Shop() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.app.search);
  const filter = useSelector((state) => state.app.filter);
  const handleSearch = () => {
    console.log("search");
  };

  return (
    <>
      <div className="md:w-full md:mt-[4rem] md:h-16 md:flex md:items-center md:justify-around md:bg-stone-100">
        <p>
          <TiThMenu className="md:text-2xl md:ml-6 cursor-pointer" />
        </p>
        <div className="md:w-[70%] md:relative">
          <input
            type="text"
            className="md:w-[100%] border-[2px] cursor-pointer focus:border-2 focus:border-indigo-100 border-indigo-800 md:pb-[6px] md:pt-[5px] md:px-5 md:text-[1rem] md:bg-stone-50 outline-none rounded-full"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <FiSearch
            className="md:absolute top-[50%] right-[-5px] translate-[-50%] md:w-[1.8rem] md:h-[1.8rem] md:p-[5px] md:bg-red-500 rounded-full cursor-pointer"
            onClick={() => handleSearch()}
          />
        </div>
        <select
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          className="md:w-[13%] border md:py-1 md:px-3 rounded-[5px] cursor-pointer"
        >
          <option value="all"> All</option>
          <option value="high-low-price">High to low</option>
          <option value="low-high-price">Low to high</option>
          <option value="discount">Dicounted offers</option>
        </select>
      </div>
      <div className="md:w-full md:h-auto  md:grid md:grid-cols-[18rem_1fr] ">
        <ProductSidebar />

        <div className="md:flex md:flex-wrap border border-gray-400 md:p-3">
          {products.map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
