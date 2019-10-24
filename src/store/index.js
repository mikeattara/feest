import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import userReducer from "./user/userReducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const reducer = combineReducers({
  user: userReducer
});

export const store = createStore(reducer, applyMiddleware(...middlewares));
