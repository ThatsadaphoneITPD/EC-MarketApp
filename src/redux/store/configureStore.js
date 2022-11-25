import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialAllReducers, initialStateLocalStorage } from "../reducers";

const reducer = combineReducers(initialAllReducers);

const middleware = [thunk];

const store = createStore(
  reducer,
  initialStateLocalStorage,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
