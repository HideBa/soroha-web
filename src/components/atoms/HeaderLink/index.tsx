import React from "react";
import { Link } from "react-router-dom";

export type Props = {
  className?: string;
  text?: string;
  LinkTo?: string;
};

const HeaderLink: React.FC<Props> = ({ className, text, LinkTo }) => {
  return <Link to={LinkTo || "/"}>{text}</Link>;
};

export default HeaderLink;
