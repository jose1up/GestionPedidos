import axios from "axios";
const url = import.meta.env.VITE_URL;

export const typesCategory = {
  GET_ALL_CATEGORYS: "GET_ALL_CATEGORYS",
};

export const getAllCategorys = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios.get(`${url}/categorys`);
      return dispatch({
        type: typesCategory.GET_ALL_CATEGORYS,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};
