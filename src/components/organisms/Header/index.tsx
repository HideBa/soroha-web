import React from "react";
import Header from "@soroha/components/molecules/Header";
import { LinkType } from "@soroha/components/atoms/NavLink";

export type Props = {
  className?: string;
  isSignIn?: boolean;
  isPC?: boolean;
  links?: LinkType[];
};

const NavBar: React.FC<Props> = ({ className, isSignIn, isPC, links }) => {
  return <Header links={links} isPC={isPC} />;
};

export default NavBar;
