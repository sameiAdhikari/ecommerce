import supabase from "./supabase";

export async function insertCustomerInfo(data) {
  // Make sure only fields that exist in your Supabase "customerInfo" table are included,
  // and that all required fields are present and have the correct types.
  const customerInfo = {
    addressLine1: data.addressLine1 || null,
    addressLine2: data.addressLine2 || null,
    city: data.city || null,
    country: data.country || null,
    emailAddress: data.emailAddress || null,
    firstName: data.firstName || null,
    gender: data.gender || null,
    lastName: data.lastName || null,
    middleName: data.middleName || null,
    contactNumber: data.contactNumber ? Number(data.contactNumber) : null,
    state: data.state || null,
    postalCode: data.postalCode || null,
  };

  const { data: customerInformation, error } = await supabase
    .from("customerInfo")
    .insert([customerInfo])
    .select();
  if (error) throw new Error("error while submitting data");
  return customerInformation;
}

export async function getCustomerInfo(customerId) {
  if (!customerId) return;
  const { data: customer, error } = await supabase
    .from("customerInfo")
    .select("*")
    .eq("id", customerId);
  if (error) throw new Error("error while getting customer information");
  return customer;
}

export async function insertShippingInfo(data) {
  const { data: shippingInfo, error } = await supabase
    .from("shippingInfo")
    .insert([data])
    .select();
  if (error) return new Error("error while inserting data");
  return shippingInfo;
}

export async function insertCardInfo(data) {
  const newData = {
    cardHolder: data.cardHolder,
    cardNumber: Number(data.cardNumber.replace(/\s+/g, "")),
    expiryMonth: data.expiryMonth,
    expiryYear: Number(data.expiryYear),
    cvc: Number(data.cvc),
  };
  const { data: cardInfo, error } = await supabase
    .from("paymentDetails")
    .insert([newData])
    .select();
  if (error) throw new Error("error while inserting cardInformation");
  return cardInfo;
}
