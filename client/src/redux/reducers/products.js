import { typesProducts } from "../actions/products";

export const initialState = {
  allProduct: [],
};

const cases = {};

cases[typesProducts.GET_ALL_PRODUCTS] = (initialState, payload) => ({
  ...initialState,
  allProduct: [...payload],
});

export default function productReducer(
  state = initialState,
  { type, payload }
) {
  return cases[type] ? cases[type](state, payload) : state;
}
