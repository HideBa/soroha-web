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
import NotFound from "./components/pages/Error/NotFound";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Router>
          <Switch>
            <Route exact path="/signin" component={SigninPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/" component={Home} />
            <Route exact path="/:userName/settings" component={Setting} />
            <Route exact path="/:teamName">
              <Home />
            </Route>
            <Route exact path="/:teamName/summary" component={Summary} />
          </Switch>
          <Route path="/:teamName" component={MenuBar} />
          <Route component={NotFound} />
        </Router>
      </RecoilRoot>
    </>
  );
};

export default hot(module)(App);
