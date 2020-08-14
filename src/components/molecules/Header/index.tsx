import React from "react";
import { colors, metrics } from "@soroha/components/styles";
import NavLink, { LinkType } from "@soroha/components/atoms/NavLink";
import Logo from "@soroha/components/atoms/Logo";
import styled from "@emotion/styled";

export type Props = {
  links?: LinkType[];
  isPC?: boolean;
};

const Header: React.FC<Props> = ({ links, isPC }) => {
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
                return <NavLink key={link.text} link={link} />;
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
  height: 50px;
  align-items: center;
  padding: ${metrics.padding.header};
`;

const LeftWrapper = styled.div``;

const RightWrapper = styled.div``;

export default Header;
