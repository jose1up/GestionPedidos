import { combineReducers } from "redux";
import product from "./products";
import category from "./category"

export default combineReducers({
  product,
  category
});
