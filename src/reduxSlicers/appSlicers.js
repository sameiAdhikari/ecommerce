import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  customerId: null,
  steps: 1,
  isCompleted: false,
  category: "",
  isCheckedRange: [false, false, false],
  productRating: [false, false, false, false, false],
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
    setIsCheckedRange: (state, action) => {
      const updated = [...state.isCheckedRange];
      updated[action.payload] = !updated[action.payload];
      state.isCheckedRange = updated;
    },
    setProductRating: (state, action) => {
      const updated = [...state.productRating];
      updated[action.payload] = !updated[action.payload];
      state.productRating = updated;
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
} = appSlice.actions;
export default appSlice.reducer;
