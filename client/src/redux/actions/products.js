import axios from "axios";

const url = import.meta.env.VITE_URL;

export const typesProducts = {
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
  FIND_PRODUCTS: "FIND_PRODUCTS",
};

// Peticion de todos los productos al backend
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

// Peticion de los productos que macheen con name que pasamos
export const findProduct = (name) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/products?name=${name}`);
      return dispatch({
        type: typesProducts.FIND_PRODUCTS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
