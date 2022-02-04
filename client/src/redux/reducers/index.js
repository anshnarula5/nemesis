import { combineReducers } from "redux";
import { adminLoginReducer, adminRegisterReducer } from "./adminReducers";
import alertReducer from "./alertReducer";
import { addUserReducer, getUsersReducer } from "./userReducers";

const rootReducer = combineReducers({
  alert: alertReducer,
  adminLogin: adminLoginReducer,
  adminRegister: adminRegisterReducer,
  addUser: addUserReducer,
  allUsers : getUsersReducer
});

export default rootReducer;
