import { typesCategory } from "../actions/category";

export const initialState = {
  allCategorys: [],
};

const cases = {};

cases[typesCategory.GET_ALL_CATEGORYS] = (initialState, payload) => ({
  ...initialState,
  allCategorys: [...payload],
});

export default function productReducer(
  state = initialState,
  { type, payload }
) {
  return cases[type] ? cases[type](state, payload) : state;
}
