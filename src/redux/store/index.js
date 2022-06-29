import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "../reducers/counterReducer";

const reducers = combineReducers({
  counter: counterReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
