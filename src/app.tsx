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
import Summary from "./components/pages/Summary";

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
            <Route exact path="/signin">
              <SigninPage />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/">
              <SignupPage />
            </Route>
            {/* <Route exact path="/"> */}
            <Route exact path="/:teamName">
              <Home />
            </Route>
            <Route exact path="/:userName/settings">
              <Setting />
            </Route>
            <Route exact path="/:teamName/summary">
              <Summary />
            </Route>
          </Switch>
          <Route path="/:teamName">
            <MenuBar />
          </Route>
        </Router>
      </RecoilRoot>
    </>
  );
};

export default hot(module)(App);
