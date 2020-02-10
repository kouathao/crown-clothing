import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

// bring in root reducers
import rootReducer from "./rootReducer";
// bring in logger and put as an array
const middlewares = [logger];

// create store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// create a new persist of the store for local storage
export const persistor = persistStore(store);

export default { store, persistor };
