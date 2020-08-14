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
  isPC?: boolean;
};

const Header: React.FC<Props> = ({ className, links, isPC }) => {
  return (
    <>
      {isPC ? (
        <PCWrapper>
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
        </PCWrapper>
      ) : (
        <SPWrapper>
          <Logo isPC={isPC} />
        </SPWrapper>
      )}
    </>
  );
};

const PCWrapper = styled.div`
  background-color: ${colors.lightGreen};
  height: 50px;
  padding: ${metrics.padding.header};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const SPWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftWrapper = styled.div``;

const RightWrapper = styled.div``;

export default Header;
