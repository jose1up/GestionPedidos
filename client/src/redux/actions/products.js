import axios from "axios";

const url = import.meta.env.VITE_URL;

export const typesProducts = {
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
};

export const getAllProduct = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/products`);
      return dispatch({
        type: typesProducts.GET_ALL_PRODUCTS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};