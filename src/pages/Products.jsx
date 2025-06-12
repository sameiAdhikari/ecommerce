// {
//   "_id": "fa8e22d6-c0b6-5229-bb9e-ad52eda39a0a",
//   "actual_price": "2,999",
//   "average_rating": "3.9",
//   "brand": "York",
//   "category": "Clothing and Accessories",
//   "crawled_at": "02/10/2021, 20:11:51",
//   "description": "Yorker trackpants made from 100% rich combed cotton giving it a rich look.Designed for Comfort,Skin friendly fabric,itch-free waistband & great for all year round use Proudly made in India",
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

import ProductList from "../components/ProductList";
import ProductSidebar from "../components/ProductSidebar";
import SingleProduct from "../components/SingleProduct";

const products = [
  {
    id: 1,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    // reviews: 100,
    category: "sarees",
    description:
      "A beautiful saree perfect for any occasion. A beautiful saree perfect for any occasion.",
    rating: 2.2,
    stock: 5,
    discount: 20,
    sold: 50,
    colors: ["red", "blue", "orange", "green"],
  },
  {
    id: 1,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    // reviews: 100,
    category: "sarees",
    description:
      "A beautiful saree perfect for any occasion.A beautiful saree perfect for any occasion.",
    rating: 3.2,
    sold: 80,
    stock: 5,
    discount: 15,
  },
  {
    id: 1,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    reviews: 100,
    category: "sarees",
    description:
      "A beautiful saree perfect for any occasion. jhkjhk jhkh hkjhjh kjhkhk hkjhkj kjnkjhk kjhkkj kjhkjh kjhk kjhkj kjk lkhgkj kjhk jhkjhk jhkh hkjhjh kjhkhk hkjhkj kjnkjhk kjhkkj kjhkjh kjhk kjhkj kjk lkhgkj kjhk jhjh kjhkjh kjhkjh",
    rating: 4.2,
    stock: 5,
    discount: 5,
    sold: 100,
    colors: ["red", "blue", "orange", "green"],
  },
  {
    id: 1,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    brand: "adidas",
    // reviews: 100,
    category: "sarees",
    description:
      "A beautiful saree perfect for any occasion.A beautiful saree perfect for any occasion.",
    rating: 4.2,
    stock: 5,
    sold: 20,

    discount: 10,
  },
  {
    id: 1,
    name: "Elegant Saree ",
    price: 120,
    image: "saree.jpg",
    // brand: "adidas",
    reviews: 100,
    category: "sarees",
    description: "A beautiful saree perfect for any occasion.",
    rating: 5.2,
    stock: 5,
    // discount: 20,
    sold: 30,
  },
];

function Shop() {
  return (
    <div className="md:w-full md:h-auto md:mt-[4rem]  md:grid md:grid-cols-[17rem_1fr] md:border-t-1">
      <ProductSidebar />
      <div className="md:flex md:flex-wrap">
        {products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
