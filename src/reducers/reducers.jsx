import { combineReducers } from "redux";
import { fullScreenStateReducer } from "./fullScreenStateReducer";
import { formStateReducer } from "./formStateReducer";

// Combine all reducers
export const reducers = combineReducers({
    fullScreenStateReducer,
    formStateReducer
})