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
      <LeftWrapper>
        <Logo />
      </LeftWrapper>
      <RightWrapper>
        {links &&
          links.map(link => {
            return (
              <HeaderLink
                key={link.text}
                text={link.text}
                LinkTo={link.LinkTo}
              />
            );
          })}
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.lightGreen};
  height: 50px;
  padding: ${metrics.padding.header};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const LeftWrapper = styled.div``;

const RightWrapper = styled.div``;

export default Header;
