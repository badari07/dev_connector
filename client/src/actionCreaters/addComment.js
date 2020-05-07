import { ADD_COMMENT, POST_ERROR } from "../action/types";
import Axios from "axios";
import setAlert from "../actionCreaters/setAlert";

export default (id, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await Axios.post(`/api/posts/comment/${id}`, formData, config);
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    dispatch(setAlert("Comment Added", "success"));
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
