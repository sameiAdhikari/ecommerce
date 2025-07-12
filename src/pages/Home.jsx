// import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import LandingPage from "../components/LandingPage";
import NewsLetter from "../components/NewsLetter";
import Spinner from "../components/Spinner";
import { useProducts } from "../services/useProducts";

const Home = () => {
  const navigate = useNavigate();
  const { products, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  // localStorage.setItem("recentView", JSON.stringify([]));
  const recentlyViews =
    JSON.parse(localStorage.getItem("recentView")) || products?.[0];
  const browsingHistory =
    JSON.parse(localStorage.getItem("browsingHistory")) || [];

  if (isLoading) return <Spinner />;
  const clearningTools = products?.filter(
    (products) => products.sub_category === "cleaning tools"
  );
  const homeDecor = products?.filter(
    (products) => products?.sub_category === "home decor"
  );
  const airFriyer = products?.filter(
    (products) => products.sub_category === "air fryer"
  );
  const washingMachine = products?.filter(
    (products) => products?.sub_category === "washing machine"
  );
  const gamingAccessories = products?.filter(
    (products) => products?.sub_category === "gaming accessories"
  );
  const underFifty = products?.filter((products) => products.price <= 50);
  const popularInElectronics = products?.filter(
    (products) => products.reviews <= 1000
  );
  const phones = products?.filter(
    (products) => products.sub_category === "mobile phones"
  );

  const laptop = products?.filter(
    (products) => products?.sub_category === "laptops"
  );

  const browseProduct = products?.filter((product) => {
    return browsingHistory?.some(
      (key) =>
        product?.title?.toLowerCase().includes(key.toLowerCase()) ||
        product?.category?.toLowerCase().includes(key.toLowerCase()) ||
        product?.sub_category?.toLowerCase().includes(key.toLowerCase()) ||
        product?.descriptions?.toLowerCase().includes(key.toLowerCase())
    );
  });

  const recentlyViewsCategory = products?.filter(
    (product) =>
      product.category === recentlyViews.sub_category &&
      product.id !== recentlyViews.id
  );

  const handleClickImage = (id) => {
    navigate(`/products/${id}`);
  };

  const handleDiscoverMore = (category) => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
    navigate({ pathname: "/products", search: searchParams.toString() });
  };

  return (
    <div>
      <LandingPage />
      <div className="flex justify-center pt-[4rem] gap-5 bg-gray-400 p-4">
        <div className="w-[29rem] h-[30rem] bg-stone-50 p-5 flex flex-col justify-center  gap-4">
          <h2 className="text-xl font-bold mt-4">
            Shop for your home essentials
          </h2>
          <div className="w-full h-[85%] flex gap-3 flex-wrap">
            <div className="w-[48%] h-[50%] flex flex-col gap-1 text-center  capitalize">
              <img
                src={clearningTools?.[0].images?.[0]}
                className="w-full h-[80%] object-fit"
                onClick={() => handleClickImage(clearningTools?.[0].id)}
              />
              <p>Cleaning Tools</p>
            </div>
            <div className="w-[48%] h-[50%] flex flex-col gap-1 text-center capitalize">
              <img
                src={homeDecor?.[0].images?.[0]}
                onClick={() => handleClickImage(homeDecor?.[0].id)}
                className="w-full h-[80%] object-fit"
              />
              <p>Home decor</p>
            </div>
            <div className="w-[48%] h-[50%] flex flex-col gap-1 text-center capitalize">
              <img
                src={washingMachine?.[0].images?.[0]}
                onClick={() => handleClickImage(washingMachine?.[0].id)}
                className="w-full h-[80%] object-fit"
              />
              <p>boach</p>
            </div>
            <div className="w-[48%] h-[50%] flex flex-col gap-1 text-center capitalize">
              <img
                src={airFriyer?.[0].images?.[0]}
                onClick={() => handleClickImage(airFriyer?.[0].id)}
                className="w-full h-[80%] object-cover"
              />
              <p>Air fryer</p>
            </div>
          </div>
          <button
            className="pb-2 text-left w-full text-indigo-100 font-semibold cursor-pointer hover:underline transition-all duration-300"
            onClick={() => handleDiscoverMore(airFriyer?.[0].category)}
          >
            Discover more about home appliance
          </button>
        </div>
        <div className="w-[29rem] h-[30rem] bg-stone-50 p-5 flex flex-col justify-center  gap-4">
          <h2 className="text-xl font-bold mt-4">Get you game on</h2>
          <div className="w-full h-[85%] flex gap-3 flex-wrap">
            <img
              src={gamingAccessories?.[0].images?.[0]}
              onClick={() => handleClickImage(gamingAccessories?.[0].id)}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            className="pb-2 text-left w-full text-indigo-100 font-semibold cursor-pointer hover:underline transition-all duration-300"
            onClick={() => handleDiscoverMore(gamingAccessories?.[0].category)}
          >
            Discover more about gaming
          </button>
        </div>
        <div className="w-[29rem] h-[30rem] bg-stone-50 p-5 flex flex-col justify-center  gap-4">
          <h2 className="text-xl font-bold mt-4">New arrivals under $50</h2>
          <div className="w-full h-[85%] flex gap-3 flex-wrap">
            {underFifty?.slice(0, 4).map((product) => {
              return (
                <div
                  className="w-[48%] h-[50%] flex flex-col gap-1 text-center  capitalize"
                  key={product.id}
                >
                  <img
                    src={product?.images?.[0]}
                    className="w-full h-[80%] object-fit"
                    onClick={() => handleClickImage(product.id)}
                  />
                  <p>{product.sub_category}</p>
                </div>
              );
            })}
          </div>
          <button
            className="pb-2 text-left w-full text-indigo-100 font-semibold cursor-pointer hover:underline transition-all duration-300"
            onClick={() => handleDiscoverMore("all")}
          >
            Explore more exclusive products
          </button>
        </div>
      </div>

      {/* ------------------------------most popular products -----------------------------------*/}
      <section className="h-[20rem] pt-5 flex flex-col justity-center items-center bg-gray-400">
        <div className="w-[94.5%] h-[18rem] p-5 bg-white overflow-hidden">
          <h2 className="text-[1.3rem] font-bold mb-3">
            Most Popular Products
          </h2>
          <div className="w-[100%] h-[90%] flex gap-5 overflow-x-scroll">
            {popularInElectronics.map((product) => (
              <div key={product.id} className=" flex-shrink-0">
                <img
                  src={product?.images?.[0]}
                  className="h-[90%] object-cover cursor-pointer"
                  onClick={() => handleClickImage(product.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------------------------------------phones products ------------------------------------------*/}

      <section className="w-full h-[22rem] pt-3 bg-gray-400">
        <div className="w-[94.5%] h-full m-auto flex justify-between">
          {phones?.slice(0, 4).map((phone) => {
            return (
              <div
                className="w-[24%] h-full flex flex-col jusfity-between bg-stone-50 p-4"
                key={phone.id}
              >
                <h2 className="text-xl font-semibold ">{phone?.title}</h2>
                <img
                  src={phone?.images[0]}
                  className="w-[80%] max-h-[80%] object-fit m-auto"
                  onClick={() => handleClickImage(phone.id)}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------display laptop ----------------------------------------*/}

      <section className="bg-gray-400 py-7">
        <div className="w-[94.5%]  h-[18.5rem] m-auto bg-white p-3">
          <h2 className="text-2xl pb-3 font-semibold">{laptop?.[0]?.title}</h2>
          <div className="w-full h-full flex gap-15">
            {laptop?.[0]?.images.map((image, i) => (
              <img
                src={image}
                className="w-[20rem] h-[14rem]"
                key={laptop?.[0]?.images[i]}
                onClick={() => handleClickImage(laptop?.[0].id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------browser history products -------------------------------------------*/}

      <section className="bg-gray-400 pb-7">
        <div className="w-[94.5%]  h-[20rem] m-auto bg-white p-3">
          <h2 className="text-2xl pb-3 font-semibold">
            Based on your Browser history
          </h2>
          <div className="w-full h-[89%] overflow-x-scroll flex gap-10">
            {browseProduct.length > 0
              ? browseProduct
                  .slice(0, 15)
                  .map((product) => (
                    <img
                      src={product.images[0]}
                      className="w-[15rem] h-full"
                      key={product.id}
                      onClick={() => handleClickImage(product.id)}
                    />
                  ))
              : products
                  ?.slice(10, 20)
                  .map((product) => (
                    <img
                      src={product.images[0]}
                      className="w-[15rem] h-full"
                      key={product.id}
                      onClick={() => handleClickImage(product.id)}
                    />
                  ))}
          </div>
        </div>
      </section>

      {/* ------------------------------continue shopping for ---------------------------------------------*/}

      <section className="bg-gray-400 pb-7">
        <div className="w-[94.5%]  h-[25rem] m-auto overflow-x-scroll bg-white p-5">
          <h2 className="text-2xl pb-3 font-semibold">Continue shopping for</h2>
          <div className="w-full h-[85%]">
            <div className="w-auto flex h-full gap-7 ">
              <div
                className="flex flex-col flex-shrink-0 justify-between pt-5 h-full"
                onClick={() => handleClickImage(recentlyViews.id)}
              >
                <img
                  src={recentlyViews?.images?.[0]}
                  className="w-[16rem] h-[90%] object-fit"
                />
                <p>{recentlyViews?.category}</p>
              </div>
              {(recentlyViewsCategory.length > 0
                ? recentlyViewsCategory
                : products.slice(15, 25)
              )?.map((product) => {
                return (
                  <div
                    className="flex flex-col flex-shrink-0 justify-between pt-5 h-full"
                    onClick={() => handleClickImage(product.id)}
                    key={product.id}
                  >
                    <img
                      src={product?.images?.[0]}
                      className="w-[16rem] h-[90%] object-fit"
                    />
                    <p>{product?.category}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------news letters section------------------------------ */}
      <NewsLetter />
    </div>
  );
};
export default Home;
