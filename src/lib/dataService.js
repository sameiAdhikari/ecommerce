import { toast } from "react-toastify";
import supabase from "./supabase";

export async function getProducts() {
  let { data: products, error } = await supabase.from("products").select("*");
  if (error) throw new Error("could not fetch the data from the server");
  return products;
}

export async function getProduct(productId) {
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();
  if (error) throw new Error("could not fetch the data from the server");
  return product;
}

export async function getOrdes() {
  const { data, error } = await supabase.from("promotions").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function getAllOrdrsList() {
  const { data: allOrders, error } = await supabase.from("orders").select("*");
  if (error) throw new Error(error.message);
  return allOrders;
}
export async function getOrdersByUserId(id) {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", id);
  if (error) throw new Error(error.message);
  return orders;
}
export async function getOrdersByOrderId(id) {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id);
  if (error) throw new Error(error.message);
  return orders;
}

export async function insertOrders({ user_id, data }) {
  const { data: orderDetails, error } = await supabase
    .from("orders")
    .insert([{ user_id, user_info: data }])
    .select("*");
  if (error) throw new Error(error.message);
  return orderDetails[0];
}

export async function insertShippingInfo({ order_id, data }) {
  const { error } = await supabase
    .from("orders")
    .update({ shipping_info: data })
    .eq("id", order_id);
  if (error) return new Error(error.message);
}

export async function insertCardInfo({
  order_id,
  totalAmountAfterDiscountAndTax,
  finalOrders,
  totalDiscount,
  data,
  order_status,
  payment_status,
}) {
  const { error } = await supabase
    .from("orders")
    .update({
      payment_info: data,
      total_amount: totalAmountAfterDiscountAndTax,
      discount: totalDiscount,
      items: finalOrders,
      order_status: order_status,
      payment_status: payment_status,
    })
    .eq("id", order_id);
  if (error) throw new Error("error while inserting cardInformation");
  toast.success("order successfully placed");
}

export async function insertNewsletter(data) {
  const { error } = await supabase
    .from("newsletters")
    .insert([{ email: data }]);
  if (error) throw new Error("error while inserting newsletter to dataBase");
}

export async function getRecommendedProducts() {
  let { data: recommended, error } = await supabase
    .from("recommended")
    .select("*");
  if (error) throw new Error("error while getting data from recommended table");
  return recommended;
}
export async function registerUser(data) {
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        full_name: data.fullName,
      },
    },
  });
  if (error) throw new Error(error.message);
}

export async function signIn(data) {
  const { data: tokan, error } = await supabase.auth.signInWithPassword(data);
  if (error) throw new Error(error.message);
  return tokan;
}
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
export async function signInWithGoogle() {
  const { error } = supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        prompt: "select_account",
      },
      redirectTo: import.meta.env.VITE_REACT_APP_REDIRECT_URL_LOCAL,
    },
  });
  if (error) throw new Error(error.message);
}

export async function getPromotions() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("promotion", true);
  if (error) throw new Error(error.message);
  return data;
}

export async function getUser() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return;
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data;
}

export async function restCountry() {
  const response = await fetch(
    "https://restcountries.com/v3.1/independent?status=true"
  );
  const countries = await response.json();
  return countries;
}

export async function forgotPassword(email) {
  // const { error: userError } = await supabase.from("auth.users").select("*");
  // if (userError) throw new Error(userError.message);
  let { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) throw new Error(error.message);
  return data;
}

export async function updatePassword({ email, password }) {
  const { data, error } = await supabase.auth.updateUser({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}
