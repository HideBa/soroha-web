import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { colors, fonts } from "@soroha/components/styles";

export type Props = {
  className?: string;
  text?: string;
  LinkTo?: string;
};

const HeaderLink: React.FC<Props> = ({ className, text, LinkTo }) => {
  return <StyledLink to={LinkTo || "/"}>{text}</StyledLink>;
};

const StyledLink = styled(Link)`
  color: ${colors.whiteBrown};
  font-size: ${fonts.size.medium2};
`;
export default HeaderLink;
