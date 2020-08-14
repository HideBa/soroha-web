import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors, fonts } from "@soroha/components/styles";
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
        <StyledIconLink to={link.linkTo || "/"}>
          <Icon icon={link.icon} />
        </StyledIconLink>
      )}
    </>
  );
};

const StyledTextLink = styled(Link)`
  color: ${colors.whiteBrown};
  font-size: ${fonts.size.medium2};
`;

const StyledIconLink = styled(Link)``;

export default NavLink;
