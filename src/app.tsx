import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./components/styles";
import Home from "./components/pages/Home";
import SigninPage from "./components/pages/Signin";
import SignupPage from "./components/pages/Signup";
import { RecoilRoot } from "recoil";
import Setting from "./components/pages/Setting";
import Summary from "./components/pages/Summary";
import NotFound from "./components/pages/Error/NotFound";
import Top from "./components/pages/Top";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Router>
          <Switch>
            <Route exact path="/signin" component={SigninPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/" component={Top} />
            <Route exact path="/settings/:teamName" component={Setting} />
            <Route exact path="/:teamName" component={Home} />
            <Route exact path="/summary/:teamName" component={Summary} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </RecoilRoot>
    </>
  );
};

export default hot(module)(App);
