import React from "react";
import { colors, metrics } from "@soroha/components/styles";
import HeaderLink from "@soroha/components/atoms/HeaderLink";
import Logo from "@soroha/components/atoms/Logo";
import styled from "@emotion/styled";

export type Link = {
  text: string;
  LinkTo: string;
};

export type Props = {
  className?: string;
  links?: Link[];
};

const Header: React.FC<Props> = ({ className, links }) => {
  return (
    <Wrapper>
      <Logo />
      {links &&
        links.map(link => {
          return (
            <HeaderLink key={link.text} text={link.text} LinkTo={link.LinkTo} />
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.lightGreen};
  height: 80px;
  padding: ${metrics.padding.header};
  display: flex;
  align-items: center;
`;

export default Header;
