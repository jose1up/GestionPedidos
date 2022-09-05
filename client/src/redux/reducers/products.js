import { typesProducts } from "../actions/products";
import { typesCart } from "../actions/Cart";

export const initialState = {
  allProduct: [],
  bkAllProducts: [],
  cart: [],
};

const cases = {};

cases[typesProducts.GET_ALL_PRODUCTS] = (initialState, payload) => ({
  ...initialState,
  allProduct: [...payload],
  bkAllProducts: [...payload],
});

cases[typesProducts.FIND_PRODUCTS] = (state, payload) => {
  return {
    ...state,
    allProduct: [...payload],
  };
};

cases[typesProducts.FILTER_FOR_CATEGORY] = (state, payload) => {
  let filteredProducts = state.allProduct.filter(
    (p) => p.Category_id == parseInt(payload)
  );

  return filteredProducts.length > 0
    ? {
        ...state,
        allProduct: filteredProducts,
      }
    : {
        ...state,
        allProduct: state.allProduct,
      };
};

cases[typesCart.ADD_TO_CART] = (state, payload) => {
  let newItem = state.allProduct.find((product) => product.id === payload);
  let itemsInCart = state.cart.find((item) => item.id === newItem.id);

  return itemsInCart
    ? {
        ...state,
        cart: state.cart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }
    : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
};

export default function productReducer(
  state = initialState,
  { type, payload }
) {
  return cases[type] ? cases[type](state, payload) : state;
}
