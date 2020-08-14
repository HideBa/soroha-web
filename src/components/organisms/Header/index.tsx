import React from "react";
import { Link } from "@soroha/components/molecules/Header";

export type Props = {
  className?: string;
};

const NavBar: React.FC<Props> = ({ className }) => {
  // const links: Link = undefined
  return <div className={className}></div>;
};

export default NavBar;
