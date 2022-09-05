import { typesCategory } from "../actions/category";

export const initialState = {
  allCategory: [],
};

const cases = {};

cases[typesCategory.GET_ALL_CATEGORYS] = (initialState, payload) => ({
  ...initialState,
  allCategory: [...payload],
});

export default function categotyReducer(
  state = initialState,
  { type, payload }
) {
  return cases[type] ? cases[type](state, payload) : state;
}
