import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  forgotPassword,
  getAllOrdrsList,
  // filterSubCategory,
  getProduct,
  getProducts,
  getPromotions,
  getRecommendedProducts,
  registerUser,
  restCountry,
  signInWithGoogle,
  signOut,
  updatePassword,
} from "../lib/dataService";

export function useSignIn() {
  const { mutate: signInUser, isLoading } = useMutation({
    mutationKey: ["registered_user"],
    mutationFn: (data) => registerUser(data),
    onSuccess: () => toast.success("please verify your email address"),
    onError: () => toast.error("could not register a user account"),
  });
  return { signInUser, isLoading };
}
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

export function useRecommendedProduct() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recommended_product"],
    queryFn: getRecommendedProducts,
  });
  if (error) throw new Error("error to fetch data");
  return { data, isLoading };
}

export function usePromotions() {
  const {
    data: promotions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["promotions"],
    queryFn: getPromotions,
  });
  if (error) throw new Error(error.message);
  return { promotions, isLoading };
}
export function useCountry() {
  const {
    data: countries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: restCountry,
  });
  if (error) throw new Error(error.message);
  return { countries, isLoading };
}
export function useSignInWith() {
  const { mutate: handleLogIn, isLoading } = useMutation({
    mutationKey: ["login_with_google"],
    mutationFn: () => signInWithGoogle(),
    onError: (error) => {
      console.log(error.message);
      return toast.error("couldn't log in with gmail");
    },
  });

  return { handleLogIn, isLoading };
}

export function useSignout() {
  const { mutate: logOut, isLoading } = useMutation({
    mutationKey: ["signout"],
    mutationFn: signOut,
    onError: (error) => toast.error(error.message),
    onSuccess: () => toast.success("successfully logout! hope to see you back"),
  });
  return { logOut, isLoading };
}

export function useForgetPassword() {
  const {
    mutate: forgetPassword,
    isLoading,
    error,
  } = useMutation({
    mutationKey: ["forgetPassword"],
    mutationFn: (email) => forgotPassword(email),
    onError: (error) => toast.error(error.message),
    onSuccess: () => toast.success(" Password reset link sent to your email."),
  });
  if (error) throw new Error(error.message);
  return { forgetPassword, isLoading };
}

export function useUpdatePassword() {
  const { mutate: updateUserPassword } = useMutation({
    mutationKey: ["updatePassword"],
    mutationFn: ({ email, password }) => updatePassword({ email, password }),
    onSuccess: () => toast.success("✅ Password updated successfully."),
    onError: () => toast.error("❌ Failed to update password."),
  });
  return { updateUserPassword };
}

export function useGetAllOrdersList() {
  const {
    data: allOrders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allOrders"],
    queryFn: getAllOrdrsList,
  });
  if (error) throw new Error(error.message);
  return { allOrders, isLoading };
}
