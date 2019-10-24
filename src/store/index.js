import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { currentUserReducer } from "./currentUser/currentUserReducer";
import { eventsReducer } from "./events/eventsReducer";
import { guestsReducer } from "./guests/guestsReducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const reducer = combineReducers({
  user: currentUserReducer,
  events: eventsReducer,
  guests: guestsReducer
});

export const store = createStore(reducer, applyMiddleware(...middlewares));
