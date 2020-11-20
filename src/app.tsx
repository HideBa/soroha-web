import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./components/styles";
import Home from "./components/pages/Home";
import NavBar from "./components/organisms/Nav/Header";
import MenuBar from "./components/organisms/Nav/MenuBar";
import SigninPage from "./components/pages/Signin";
import SignupPage from "./components/pages/Signup";
import { RecoilRoot } from "recoil";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
              <Home
                setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
                isModalOpen={isModalOpen}
              />
            </Route>
            <Route exact path="/signin">
              <SigninPage />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
          </Switch>
          <Route path="/">
            <MenuBar setIsModalOpen={() => setIsModalOpen(!isModalOpen)} />
          </Route>
        </Router>
      </RecoilRoot>
    </>
  );
};

export default hot(module)(App);
