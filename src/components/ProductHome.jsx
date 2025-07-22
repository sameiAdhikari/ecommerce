import { Suspense, useEffect, useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import Spinner from "../components/Spinner";
import { productPerPage } from "../constant/constants";
import { useProducts } from "../services/useProducts";
import ProductSidebar from "./ProductSidebar";
import SingleProduct from "./SingleProduct";
// import { updateActiveTab } from "../reduxSlicers/appSlicers";

function ProductHome() {
  // const dispatch = useDispatch();
  // const location = useLocation();
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);
  const priceRange = useSelector((state) => state.app.priceRange);
  const search = useSelector((state) => state.app.search);
  const { products, isLoading } = useProducts();
  const filter = searchParams.get("filter") || "all";
  const category = searchParams.get("category") || "all";
  const rating = Number(searchParams.get("rating")) || 0;
  const subCategory = searchParams.get("sub_category") || "all";

  let categoryFilter;
  let filterWithPrice;
  let filterProduct;
  let filterSubCategory;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);
  if (isLoading || !products || products.length === 0) return <Spinner />;

  const searchQuery = search
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .split(/\s+/);
  const searchProducts = products?.filter((product) => {
    const productQuery = [
      product.title,
      product.brand,
      product.descriptions,
      product.sub_category,
      product.category,
    ]
      .join(" ")
      .toLowerCase()
      .replace(/^\w\s/gi, "");
    return searchQuery.some((query) => {
      return productQuery.includes(query);
    });
  });

  if (category === "all") {
    categoryFilter = searchProducts;
  } else {
    categoryFilter = searchProducts.filter(
      (product) =>
        product.category.split(" ").join("-") === category.split(" ").join("-")
    );
  }

  if (subCategory === "all") {
    filterSubCategory = categoryFilter;
  } else {
    filterSubCategory = categoryFilter.filter(
      (product) => product.sub_category === subCategory
    );
  }

  if (!priceRange || !("min" in priceRange) || !("max" in priceRange)) {
    filterWithPrice = filterSubCategory;
  } else if (priceRange.min === 2000 && priceRange.max === 3000) {
    filterWithPrice = filterSubCategory.filter(
      (product) => product.price >= 2000
    );
  } else {
    filterWithPrice = filterSubCategory.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
  }
  const productWithRating = [...filterWithPrice].filter(
    (product) => product.ratings >= rating
  );

  if (filter === "high-low-price") {
    filterProduct = [...productWithRating]?.sort(
      (a, b) => b.price - b.discount - (a.price - a.discount)
    );
  } else if (filter === "low-high-price") {
    filterProduct = [...productWithRating]?.sort(
      (a, b) => a.price - a.discount - (b.price - b.discount)
    );
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
    window.scrollTo(0, 0);
  };
  const handleDecreasePage = () => {
    if (pageNumber <= 1) return;
    setPageNumber((page) => page - 1);
    window.scrollTo(0, 0);
  };
  const handleChange = (e) => {
    searchParams.set("filter", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="md:w-full md:h-auto md:mt-[7.6rem] pb-[1px] md:grid md:grid-cols-[15rem_1fr] ">
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
          <Suspense fallback={<Spinner />}>
            {itemsPerPage?.map((product) => (
              <SingleProduct product={product} key={product.id} />
            ))}
          </Suspense>
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
