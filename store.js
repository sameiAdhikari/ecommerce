import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./src/reduxSlicers/appSlicers";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
