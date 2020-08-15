import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./components/styles";
import Home from "./components/pages/Home";
import styled from "@emotion/styled";
import NavBar from "./components/organisms/Header";
import MenuBar from "./components/organisms/MenuBar";
import getLinks from "./components/UtilFunctions/Links";
import { useIsPC } from "./components/UtilFunctions/use-is-pc";
import SigninPage from "./components/pages/Signin";
import SignupPage from "./components/pages/Signup";

const App = () => {
  const isPC = useIsPC();
  const links = getLinks(isPC);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Router>
          <Route path="/">
            <NavBar links={links} />
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
            <MenuBar
              links={links}
              setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
            />
          </Route>
        </Router>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default hot(module)(App);
