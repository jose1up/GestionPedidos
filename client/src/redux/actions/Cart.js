export const typesCart = {
  ADD_TO_CART: "ADD_TO_CART",
};

export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};
