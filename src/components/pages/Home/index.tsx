import React, { useState } from "react";
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
    <>
      <NavBar isPC={isPC} links={links} />
      <Body>
        <DoughbutChartSummary />
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
    </>
  );
};

const Body = styled.div`
  margin: ${metrics.margin.body};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export default hot(Home);
