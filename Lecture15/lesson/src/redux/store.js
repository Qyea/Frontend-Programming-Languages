import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { initialState } from "./initialState";

const loggerMiddleWare = (store) => (next) => (action) => {
  console.log("MiddleWare", {
    store: store.getState(),
    next,
    action,
  });
  return next(action);
};

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(loggerMiddleWare)
);

export const store = createStore(rootReducer, initialState, enhancers);
