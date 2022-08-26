import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = import.meta.env.BASE_URL;

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
});

export default productSlice.reducer;
