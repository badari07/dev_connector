import { LOGOUT, CLEAR_PROFILE } from "../action/types";

//Logout & clear profile
export default () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
