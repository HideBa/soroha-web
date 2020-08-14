import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors, fonts, metrics } from "@soroha/components/styles";
import Icon, { Icons } from "../icons";

export type Props = {
  className?: string;
  link: LinkType;
};

export type LinkType = {
  linkTo: string;
  type: "text" | "icon";
  text?: string;
  icon?: Icons;
};

const NavLink: React.FC<Props> = ({ link }) => {
  return (
    <>
      {link.type === "text" && (
        <StyledTextLink to={link.linkTo || "/"}>{link.text}</StyledTextLink>
      )}
      {link.type === "icon" && (
        <StyledIconLink to={link.linkTo || "/"} className={"menu-icons"}>
          <Icon icon={link.icon} color={colors.whiteBrown} size={50} />
        </StyledIconLink>
      )}
    </>
  );
};

const StyledTextLink = styled(Link)`
  color: ${colors.whiteBrown};
  font-size: ${fonts.size.medium2};
`;

const StyledIconLink = styled(Link)`
  background-color: ${props => (props.color ? props.color : "")};
  margin: ${metrics.margin.navBarIcon};
`;

export default NavLink;
