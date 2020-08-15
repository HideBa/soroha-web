import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";

import Form from "@soroha/components/organisms/Form";
import NavBar from "@soroha/components/organisms/Header";
import { useMediaQuery } from "react-responsive";
import { LinkType } from "@soroha/components/atoms/NavLink";
import MenuBar from "@soroha/components/organisms/MenuBar";
import DoughbutChartSummary from "@soroha/components/organisms/DoughnutChartSummary";
import styled from "@emotion/styled";
import { metrics } from "@soroha/components/styles";

export type Props = {
  className?: string;
};

const Home: React.FC<Props> = () => {
  const isPC = useMediaQuery({ minDeviceWidth: metrics.breakPoint.tabletOrSP });
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    !isPC && setIsModalOpen(false);
  }, [isPC]);
  const links: LinkType[] = isPC
    ? [
        { linkTo: "/", type: "text", text: "Login" },
        { linkTo: "/", type: "text", text: "SignUp" },
      ]
    : [
        { linkTo: "/", type: "icon", icon: "user" },
        { linkTo: "/", type: "icon", icon: "home" },
        { linkTo: "/", type: "icon", icon: "menu" },
      ];
  return (
    <Wrapper>
      <NavBar isPC={isPC} links={links} />
      <Body>
        <DoughbutChartSummary isPC={isPC} />
        <Form
          isPC={isPC}
          isOpen={isModalOpen}
          setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
        />
      </Body>
      <MenuBar
        isPC={isPC}
        links={links}
        setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
      />
    </Wrapper>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  @media screen and (max-width: ${metrics.breakPoint.tabletOrSP}px) {
    flex-direction: column;
    align-items: center;
    padding: ${metrics.padding.body};
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default hot(Home);
