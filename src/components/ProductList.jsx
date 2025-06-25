import { useNavigate } from "react-router-dom";
import Star from "./Star";

function ProductList({ product }) {
  const navigate = useNavigate();
  const description = product.description.trim();

  const handleClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 md:w-[24%] w-full border border-gray-400 cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={
            Array.isArray(product?.images)
              ? product.images[0]
              : product?.image || "/placeholder.jpg"
          }
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="capitalize">{product?.brand || ""}</span>
          {product.reviews && <span>{product?.reviews} reviews</span>}
        </div>

        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product?.title}
        </h2>

        <p className="text-gray-500 text-sm line-clamp-3">
          {description?.length <= 70
            ? description
            : `${description.slice(0, 70)}...`}
        </p>

        <div className="flex items-center justify-between text-sm mt-1">
          <span className="text-green-600 font-medium">
            In stock: {product?.stock}
          </span>
          <Star size="20px" rating={product?.rating} />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-indigo-600 text-xl font-bold">${product?.price}</p>
        <button
          onClick={() => handleClick(product?.id)}
          className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors cursor-pointer"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductList;
