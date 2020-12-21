import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors, metrics } from "@soroha/components/styles";
import Icon, { Icons } from "../icons";
import { string } from "yup";

export type Props = {
  className?: string;
  link: LinkType;
  children?: React.ReactNode;
};

export type LinkText = {
  type: "text";
} & Omit<LinkAllType, "icon">;

export type LinkIcon = {
  type: "icon";
} & Omit<LinkAllType, "text">;

export type LinkBoth = {
  type: "both";
} & LinkAllType;

export type LinkChild = {
  type: "child";
} & Omit<LinkAllType, "icon" | "text">;

type LinkAllType = {
  linkTo: string;
  onClick?: () => void;
  icon: Icons;
  text: string;
  color?: string;
};

export type LinkType = LinkText | LinkIcon | LinkBoth | LinkChild;

const NavLink: React.FC<Props> = ({ link, children }) => {
  return (
    <>
      {link.type === "text" && (
        <StyledLink to={link.linkTo || "/"} onClick={link.onClick}>
          {link.text}
        </StyledLink>
      )}
      {link.type === "icon" && (
        <StyledLink
          to={link.linkTo || "/"}
          className={"menu-icons"}
          onClick={link.onClick}
        >
          {children ? (
            children
          ) : (
            <Icon icon={link.icon} color={colors.whiteBrown} size={30} />
          )}
        </StyledLink>
      )}
      {link.type == "both" && (
        <StyledLink
          to={link.linkTo || "/"}
          className={"header-links"}
          onClick={link.onClick}
          color={link.color}
        >
          <Icon icon={link.icon} color={link.color || colors.textDarkBrown} />
          <LinkText>{link.text}</LinkText>
        </StyledLink>
      )}
      {link.type == "child" && (
        <StyledLink
          to={link.linkTo || "/"}
          onClick={link.onClick}
          color={link.color}
        >
          {children}
        </StyledLink>
      )}
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: ${metrics.padding.headerLink};
  border-radius: ${metrics.borderRadius.button}px;
  :hover {
    background-color: ${colors.deepGreen};
  }
`;

const LinkText = styled.div<{ color?: string; hoverColor?: string }>`
  color: ${(props) => (props.color ? props.color : colors.textDarkBrown)};
  margin: 5px;
`;

export default NavLink;
