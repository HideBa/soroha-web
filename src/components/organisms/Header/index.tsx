import React from "react";
import Header, { Link } from "@soroha/components/molecules/Header";

export type Props = {
  className?: string;
  isSignIn?: boolean;
  isPC?: boolean;
};

const NavBar: React.FC<Props> = ({ className, isSignIn, isPC }) => {
  const links: Link[] = isSignIn
    ? [{ text: "Login", LinkTo: "/" }, { text: "SignUp", LinkTo: "/" }]
    : [{ text: "myPage", LinkTo: "/" }];
  return <Header links={links} isPC={isPC} />;
};

export default NavBar;
