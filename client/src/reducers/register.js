import { REGISTER_SUCCESS, REGISTER_FAIL } from "../action/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  if (type === REGISTER_SUCCESS) {
    localStorage.setItem("token", payload.token);
    return {
      ...state,
      ...payload,
      isAuthenticated: true,
      loading: false,
    };
  } else if (type === REGISTER_FAIL) {
    localStorage.removeItem("token");
    return {
      ...state,
      token: null,
      isAuthenticated: false,
      loading: false,
    };
  }
  return state;
};
