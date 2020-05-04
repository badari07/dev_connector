import { USER_LOADED, AUTH_ERROR } from "../action/types";
import axios from "axios";

//Load user

export default () => async (dispatch) => {
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
