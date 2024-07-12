import { combineReducers } from "redux";
import { counterReducer } from "../ducks/counter/reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
