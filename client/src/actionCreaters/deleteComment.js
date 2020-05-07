import { REMOVE_COMMENT, POST_ERROR } from "../action/types";
import Axios from "axios";
import setAlert from "./setAlert";

//Remove Comment
export default (id, comment_id) => async (dispatch) => {
  try {
    await Axios.delete(`/api/posts/comment/${id}/${comment_id}`);
    dispatch({
      type: REMOVE_COMMENT,
      payload: comment_id,
    });
    dispatch(setAlert("Comment Removed", "success"));
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
