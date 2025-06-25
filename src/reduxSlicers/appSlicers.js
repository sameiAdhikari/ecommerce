import { createSlice } from "@reduxjs/toolkit";
import { SiTether } from "react-icons/si";

const initialState = {
  value: 0,
  customerId: null,
  steps: 1,
  isCompleted: false,
  category: "",
  search: "",
  categoryValue: "",
  orderList: [],
  priceRange: {},
};
const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    updateCustomerId: (state, action) => {
      state.customerId = action.payload;
    },
    setSteps: (state, action) => {
      state.steps = action.payload;
    },
    setIsCompleted: (state) => {
      state.isCompleted = true;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    updatePriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategoryValue: (state, action) => {
      state.categoryValue = action.payload;
    },
    updateOrderList: (state, action) => {
      const existingProduct = state.orderList.find(
        (order) => order.productId === action.payload.productId
      );
      if (existingProduct) {
        // If the product already exists, update the quantity
        existingProduct.quantity = action.payload.quantity;
        return;
      }
      state.orderList = [...state.orderList, action.payload];
      // console.log(pp);
    },
    deleteOrderList: (state, action) => {
      state.orderList = state.orderList.filter(
        (order) => order.productId !== action.payload
      );
    },
  },
});

export const {
  updateCustomerId,
  setSteps,
  setIsCompleted,
  setCategory,
  setIsCheckedRange,
  setProductRating,
  updateSearch,
  setFilter,
  setCategoryValue,
  updateOrderList,
  updatePriceRange,
  deleteOrderList,
} = appSlice.actions;
export default appSlice.reducer;
