// import authReducer in here
import { combineReducers } from "redux";
import authReducer from "./authReducer";

// export as the authReducers as a combined one
export default combineReducers({
	auth: authReducer
});
