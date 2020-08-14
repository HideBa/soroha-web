import React from "react";
import { hot } from "react-hot-loader/root";

import Form from "@soroha/components/organisms/Form";
import NavBar from "@soroha/components/organisms/Header";
import { useMediaQuery } from "react-responsive";
import { LinkType } from "@soroha/components/atoms/NavLink";
import MenuBar from "@soroha/components/organisms/MenuBar";

export type Props = {
  className?: string;
};

const Home: React.FC<Props> = () => {
  const isPC = useMediaQuery({ minDeviceWidth: 769 });
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
      <Form />
      <MenuBar isPC={isPC} links={links} />
    </>
  );
};

export default hot(Home);
