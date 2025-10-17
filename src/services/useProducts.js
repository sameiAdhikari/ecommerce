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

// [
//   "https://evzztiqbbdthaiuacxdj.supabase.co/storage/v1/object/sign/promotion/banner2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80YjBlYWE5OC03NTlmLTQzOGEtYTA2OC1jMTFmMzAzODk4MDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9tb3Rpb24vYmFubmVyMi5qcGciLCJpYXQiOjE3NTIyNjA3NDYsImV4cCI6MTc4Mzc5Njc0Nn0.0JFSfLXwK_rL9TAzi8G_gTIDf6l9EBkQ5CEAXV1bSdQ",
//   "https://evzztiqbbdthaiuacxdj.supabase.co/storage/v1/object/sign/promotion/model2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80YjBlYWE5OC03NTlmLTQzOGEtYTA2OC1jMTFmMzAzODk4MDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9tb3Rpb24vbW9kZWwyLmpwZyIsImlhdCI6MTc1MjI2MDc5OSwiZXhwIjoxNzgzNzk2Nzk5fQ.1USNUVuYdy3WQakJv0pvm4ZQEZ9cig-BSM-lDG4mwVY",
//   "https://evzztiqbbdthaiuacxdj.supabase.co/storage/v1/object/sign/promotion/model22.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80YjBlYWE5OC03NTlmLTQzOGEtYTA2OC1jMTFmMzAzODk4MDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9tb3Rpb24vbW9kZWwyMi5qcGciLCJpYXQiOjE3NTIyNjA4NjQsImV4cCI6MTc4Mzc5Njg2NH0.5Rkg8jwAfJQA4pCysOjy82xsgNtUI56FI6D3XEnW3uo",
//   "https://evzztiqbbdthaiuacxdj.supabase.co/storage/v1/object/sign/promotion/model222.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80YjBlYWE5OC03NTlmLTQzOGEtYTA2OC1jMTFmMzAzODk4MDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9tb3Rpb24vbW9kZWwyMjIuanBnIiwiaWF0IjoxNzUyMjYwODkyLCJleHAiOjE3ODM3OTY4OTJ9.JeB4vrfFjW6ULyQ0UB6jbtvB0lpgZ-Ey9XVrXxTUGHk",
// ];
// ("https://evzztiqbbdthaiuacxdj.supabase.co/storage/v1/object/public/promotion/banner2.png?token =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2enp0aXFiYmR0aGFpdWFjeGRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NTI5MTQsImV4cCI6MjA2NTAyODkxNH0.0rSyzdYaNuuB3AX4y00l1rkLsiXGn1xkvBA3mR9x18M");
