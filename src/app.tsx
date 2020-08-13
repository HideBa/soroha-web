import React from "react";
import { hot } from "react-hot-loader";

import Home from "./components/home";

import GlobalStyles from "./style";

const App = () => (
  <>
    <GlobalStyles />
    <Home />
  </>
);

export default hot(module)(App);
