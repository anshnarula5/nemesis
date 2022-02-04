import { combineReducers } from "redux";
import {adminLoginReducer, adminRegisterReducer} from "./adminReducers";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
  alert: alertReducer,
  adminLogin: adminLoginReducer,
  adminRegister: adminRegisterReducer});

export default rootReducer;
