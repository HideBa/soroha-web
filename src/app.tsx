import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./components/styles";
import Home from "./components/pages/Home";
import NavBar from "./components/organisms/Nav/Header";
import MenuBar from "./components/organisms/Nav/MenuBar";
import SigninPage from "./components/pages/Signin";
import SignupPage from "./components/pages/Signup";
import { RecoilRoot } from "recoil";
import Setting from "./components/pages/Setting";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Router>
          <Route path="/">
            <NavBar />
          </Route>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signin">
              <SigninPage />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/settings">
              <Setting />
            </Route>
          </Switch>
          <Route path="/">
            <MenuBar />
          </Route>
        </Router>
      </RecoilRoot>
    </>
  );
};

export default hot(module)(App);
