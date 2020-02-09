import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// bring in root reducers
import rootReducer from "./rootReducer";
// bring in logger and put as an array
const middlewares = [logger];

// create store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
