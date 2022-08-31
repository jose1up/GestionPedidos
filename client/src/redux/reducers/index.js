import { combineReducers } from "redux";
import product from "./products";
import category from "./Category";

export default combineReducers({
  product,
  category,
});
