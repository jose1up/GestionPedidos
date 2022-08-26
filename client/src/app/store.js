import { configureStore } from "@reduxjs/toolkit";
import productreducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    products: productreducer,
  },
});
