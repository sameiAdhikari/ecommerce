import { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useSearchParams } from "react-router";
import { useProducts } from "../services/useProducts";
import ProductSidebar from "./ProductSidebar";
import SingleProduct from "./SingleProduct";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const productPerPage = 20;

function ProductHome() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);
  const priceRange = useSelector((state) => state.app.priceRange);
  const search = useSelector((state) => state.app.search);
  const { products, isLoading } = useProducts();
  const filter = searchParams.get("filter") || "all";
  const category = searchParams.get("category") || "all";
  const rating = Number(searchParams.get("rating")) || 0;

  let categoryFilter;
  let filterWithPrice;
  let filterProduct;

  if (isLoading || !products || products.length === 0) return <Spinner />;

  const searchProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category === "all") {
    categoryFilter = searchProducts;
  } else {
    categoryFilter = searchProducts.filter(
      (product) =>
        product.category.split(" ").join("-") === category.split(" ").join("-")
    );
  }
  console.log(category);
  console.log(categoryFilter);
  if (!priceRange || !("min" in priceRange) || !("max" in priceRange)) {
    filterWithPrice = categoryFilter;
  } else if (priceRange.min === 2000 && priceRange.max === 3000) {
    filterWithPrice = categoryFilter.filter((product) => product.price >= 2000);
  } else {
    filterWithPrice = categoryFilter.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
  }
  const productWithRating = [...filterWithPrice].filter(
    (product) => product.ratings >= rating
  );

  if (filter === "high-low-price") {
    filterProduct = [...productWithRating]?.sort((a, b) => b.price - a.price);
  } else if (filter === "low-high-price") {
    filterProduct = [...productWithRating]?.sort((a, b) => a.price - b.price);
  } else if (filter === "discount") {
    filterProduct = [...productWithRating].filter(
      (product) => product.discount > 0
    );
  } else if (filter === "all") {
    filterProduct = productWithRating;
  } else {
    filterProduct = productWithRating;
  }

  const totalPage = Math.ceil(filterProduct?.length / productPerPage);
  const itemsPerPage =
    totalPage > 1
      ? filterProduct?.slice(
          pageNumber * productPerPage - productPerPage,
          pageNumber * productPerPage
        )
      : filterProduct;

  const handleIncreasePage = () => {
    if (totalPage <= 1) return;
    setPageNumber((page) => page + 1);
  };
  const handleDecreasePage = () => {
    if (pageNumber <= 1) return;
    setPageNumber((page) => page - 1);
  };
  const handleChange = (e) => {
    searchParams.set("filter", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="md:w-full md:h-auto md:mt-[7.6rem]  md:grid md:grid-cols-[17rem_1fr] ">
        <ProductSidebar />
        <div className="md:flex md:flex-wrap border  border-gray-400 md:p-3">
          <div className="md:w-full  md:h-10 md:flex md:items-center md:justify-between border-b md:pb-3 md:mr-7">
            <div>
              <h2>Total Results ({filterProduct.length})</h2>
            </div>
            <select
              onChange={(e) => handleChange(e)}
              className="md:w-[13%] border md:py-1 md:px-3 rounded-[5px] cursor-pointer "
            >
              <option value="all"> All</option>
              <option value="high-low-price">High to low</option>
              <option value="low-high-price">Low to high</option>
              <option value="discount">Dicounted offers</option>
            </select>
          </div>
          {itemsPerPage?.map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
          <div className="w-full h-auto">
            <div className="flex items-center justify-center">
              <button
                className="py-3 px-5 border border-stone-900 rounded cursor-pointer"
                onClick={() => handleDecreasePage()}
              >
                <MdKeyboardDoubleArrowLeft />
              </button>
              <p className="py-3 px-5">
                {" "}
                {pageNumber} {totalPage > 1 && `of ${totalPage}`}
              </p>
              <button
                className="py-3 px-5 border cursor-pointer border-stone-900 rounded cursor"
                onClick={() => handleIncreasePage()}
              >
                <MdKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductHome;
