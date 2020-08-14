import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyles } from "./components/styles";
import Home from "./components/pages/Home";

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  </>
);

export default hot(module)(App);
