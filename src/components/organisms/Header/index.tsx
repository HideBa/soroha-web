import React from "react";
import Header, { Link } from "@soroha/components/molecules/Header";

export type Props = {
  className?: string;
  isSignIn?: boolean;
};

const NavBar: React.FC<Props> = ({ className, isSignIn }) => {
  const links: Link[] = isSignIn
    ? [{ text: "Login", LinkTo: "/" }, { text: "SignUp", LinkTo: "/" }]
    : [{ text: "myPage", LinkTo: "/" }];
  return <Header links={links} />;
};

export default NavBar;
