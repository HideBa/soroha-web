import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors, fonts, metrics } from "@soroha/components/styles";
import Icon, { Icons } from "../icons";

export type Props = {
  className?: string;
  link: LinkType;
};

export type LinkText = {
  linkTo: string;
  type: "text";
  text?: string;
};

export type LinkIcon = {
  linkTo: string;
  type: "icon";
  icon: Icons;
};

export type LinkType = LinkText | LinkIcon;

const NavLink: React.FC<Props> = ({ link }) => {
  return (
    <>
      {link.type === "text" && (
        <StyledTextLink to={link.linkTo || "/"}>{link.text}</StyledTextLink>
      )}
      {link.type === "icon" && (
        <StyledIconLink to={link.linkTo || "/"} className={"menu-icons"}>
          <Icon icon={link.icon} color={colors.whiteBrown} size={30} />
        </StyledIconLink>
      )}
    </>
  );
};

const StyledTextLink = styled(Link)`
  color: ${colors.whiteBrown};
  font-size: ${fonts.size.medium2};
  padding: ${metrics.padding.headerLink};
`;

const StyledIconLink = styled(Link)`
  background-color: ${props => (props.color ? props.color : "")};
  margin: ${metrics.margin.navBarIcon};
`;

export default NavLink;
