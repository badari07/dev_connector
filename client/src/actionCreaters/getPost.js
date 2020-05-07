import { GET_POST, POST_ERROR } from "../action/types";
import Axios from "axios";

//GET_POST
export default (id) => async (dispatch) => {
  try {
    const res = await Axios.get(`/api/posts/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
