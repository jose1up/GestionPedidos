import axios from "axios";

const url = import.meta.env.VITE_URL;

export const typesCategory = {
  GET_ALL_CATEGORYS: "GET_ALL_CATEGORYS",
  CREATE_CATEGORY: "CREATE_CATEGORY"
};

export const getAllCategory = () => {
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

export const creatCategory = (input)=> {
  try{
    console.log(input)
    return async () =>{
      const response = await axios.post(`${url}/categorys`, input.Cat_name);
      console.log(response)
    }
  }catch(error){
    console.log(error)
  }
}