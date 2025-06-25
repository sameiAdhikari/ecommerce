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
      if (state.orderList.includes(action.payload.productId)) return;
      state.orderList.find((order) => {
        if (order.productId === action.payload.productId) {
          (order.productId = action.payload.productId),
            (order.quantity = action.payload.productId);
        }
      });
      state.orderList = [...state.orderList, action.payload];
      // console.log(pp);
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
} = appSlice.actions;
export default appSlice.reducer;
