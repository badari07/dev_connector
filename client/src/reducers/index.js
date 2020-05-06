import { combineReducers } from "redux";
import alert from "./alert";
// import register from "./register";
// import user from "./user";
import auth from "./auth";
import profile from "./profile";
import post from "./post";

export default combineReducers({
  alert,
  auth,
  profile,
  post,
});
