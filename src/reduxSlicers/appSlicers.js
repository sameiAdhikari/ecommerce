import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  user_id: null,
  steps: 1,
  isCompleted: false,
  category: "",
  search: "",
  categoryValue: "",
  orderList: [],
  order_id: "",
  priceRange: {},
  selectAll: true,
  selectItems: [],
  finalOrders: [],
  totalAmountAfterDiscountAndTax: 0,
  userInformation: null,
  shippingInformation: null,
  promoCode: "",
  recentlyVIews: "4b5e82f8-487e-4829-9e19-a72baba98315",
  isLogin: false,
  currentSession: null,
};
const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    updateUserInformation: (state, action) => {
      state.userInformation = action.payload;
    },
    updateShippingInformation: (state, action) => {
      state.userInformation = action.payload;
    },
    updateSelectAll: (state, action) => {
      state.selectAll = action.payload;
    },
    updateSelectItems: (state, action) => {
      state.selectItems = action.payload;
    },
    updateUserId: (state, action) => {
      state.user_id = action.payload;
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
    updateCurrentSession: (state, action) => {
      state.currentSession = action.payload;
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
    resetOrderList: (state) => {
      state.orderList = [];
    },
    deleteOrderList: (state, action) => {
      state.orderList = state.orderList.filter(
        (order) => order.productId !== action.payload
      );
    },
    updateFinalOrders: (state, action) => {
      state.finalOrders = action.payload;
    },
    updatePromoCode: (state, action) => {
      state.promoCode = action.payload;
    },
    updateRecentlyViews: (state, action) => {
      state.recentlyVIews = action.payload;
    },
    updateLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    updateOrderId: (state, action) => {
      state.order_id = action.payload;
    },
    updateTotalAmountAfterDiscountAndTax: (state, action) => {
      state.totalAmountAfterDiscountAndTax = action.payload;
    },
  },
});

export const {
  updateSelectAll,
  updateUserInformation,
  updateShippingInformation,
  updateSelectItems,
  updateUserId,
  setSteps,
  setIsCompleted,
  setCategory,
  setIsCheckedRange,
  setProductRating,
  updateSearch,
  setFilter,
  setCategoryValue,
  updateOrderList,
  resetOrderList,
  updateOrderId,
  updatePriceRange,
  deleteOrderList,
  updateFinalOrders,
  updatePromoCode,
  updateRecentlyViews,
  updateLogin,
  updateCurrentSession,
  updateTotalAmountAfterDiscountAndTax,
} = appSlice.actions;
export default appSlice.reducer;
