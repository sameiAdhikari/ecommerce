import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "../lib/dataService";

export function useProducts() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (error) throw new error("error while fetching data");
  return { products, isLoading };
}

export function useRespectiveProduct(productId) {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => getProduct(productId),
  });
  if (error) throw new Error("Error while fetching data");
  return { product, isLoading };
}
