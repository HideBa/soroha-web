import React from "react";
import Form from "@soroha/components/organisms/Form";
import NavBar from "@soroha/components/organisms/Header";
import { useMediaQuery } from "react-responsive";
import { LinkType } from "@soroha/components/atoms/NavLink";
import MenuBar from "@soroha/components/organisms/MenuBar";

export type Props = {
  className?: string;
};

const Home: React.FC<Props> = ({ className }) => {
  const isPC = useMediaQuery({ minDeviceWidth: 769 });
  console.log("----", isPC);
  const links: LinkType[] = isPC
    ? [
        { linkTo: "/", type: "text", text: "Login" },
        { linkTo: "/", type: "text", text: "SignUp" },
      ]
    : [
        { linkTo: "/", type: "icon", icon: "user" },
        { linkTo: "/", type: "icon", icon: "home" },
      ];
  return (
    <>
      {/* <NavBar isPC={isPC} links={links} /> */}
      <Form />
      <MenuBar isPC={isPC} links={links} />
    </>
  );
};

export default Home;
