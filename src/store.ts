import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";

const enhancer = composeWithDevTools();

export default (initialState?: any) => {
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
};
